# Support Ticket Dashboard Integration Guide

This guide covers implementing support ticket tracking on your client and admin dashboards using the seeded ticket categories.

## Backend API Endpoints

All endpoints require JWT authentication headers:
```
Authorization: Bearer <jwt_token>
```

### Category Endpoints

#### Get All Active Categories
```
GET /api/tickets/categories/list

Response:
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Technical Issues",
      "description": "Technical problems, bugs, and system errors",
      "color": "#EF4444",
      "icon": "⚙️",
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    },
    ...
  ]
}
```

### Ticket Endpoints

#### Create New Ticket
```
POST /api/tickets

Request Body:
{
  "title": "Cannot login to my account",
  "description": "Getting 401 error when trying to sign in with correct credentials",
  "categoryId": "550e8400-e29b-41d4-a716-446655440000",
  "priority": "high",
  "dueDate": "2024-02-01T00:00:00Z",
  "clientId": "user-id",
  "orderId": "order-id",  // Optional
  "appointmentId": "appointment-id"  // Optional
}

Response:
{
  "id": "ticket-123",
  "ticketNumber": "TK-<timestamp>-<random>",
  "title": "Cannot login to my account",
  "description": "...",
  "category": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Technical Issues",
    "color": "#EF4444",
    "icon": "⚙️"
  },
  "status": "open",
  "priority": "high",
  "createdBy": "user-id",
  "createdAt": "2024-01-15T12:00:00Z"
}
```

#### List Tickets (with Filtering)
```
GET /api/tickets?page=1&limit=10&status=open&categoryId=<category-id>&priority=high

Query Parameters:
- page: Page number (default: 1)
- limit: Items per page (default: 10)
- status: Filter by status (open, in_progress, resolved, closed)
- categoryId: Filter by category
- priority: Filter by priority (low, medium, high)
- assignedTo: Filter by assigned user
- createdBy: Filter by creator

Response:
{
  "tickets": [
    {
      "id": "ticket-123",
      "ticketNumber": "TK-...",
      "title": "...",
      "status": "open",
      "priority": "high",
      "category": {...},
      "createdByProfile": {...},
      "_count": {
        "responses": 2,
        "conversations": 1
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

#### Get Ticket Details
```
GET /api/tickets/:id

Response:
{
  "id": "ticket-123",
  "ticketNumber": "TK-...",
  "title": "Cannot login",
  "description": "...",
  "category": {...},
  "status": "open",
  "priority": "high",
  "createdByProfile": {...},
  "order": {...},  // If related to order
  "appointment": {...},  // If related to appointment
  "responses": [
    {
      "id": "response-1",
      "message": "We're investigating this issue...",
      "isInternal": false,
      "user": {...},
      "createdAt": "2024-01-15T13:00:00Z"
    }
  ],
  "conversations": [...],
  "auditLogs": [
    {
      "id": "log-1",
      "actionType": "TICKET_CREATED",
      "performedBy": "user-id",
      "performedAt": "2024-01-15T12:00:00Z"
    }
  ]
}
```

#### Update Ticket
```
PUT /api/tickets/:id

Request Body:
{
  "title": "Updated title",
  "status": "in_progress",
  "priority": "medium",
  "assignedTo": "staff-member-id",
  "dueDate": "2024-02-05T00:00:00Z"
}

Response: Updated ticket object
```

#### Add Response to Ticket
```
POST /api/tickets/:id/responses

Request Body:
{
  "message": "Thank you for reporting this issue. We're looking into it.",
  "isInternal": false,  // true for internal/staff notes
  "attachments": {
    "files": ["file-url-1", "file-url-2"]
  }
}

Response:
{
  "id": "response-1",
  "ticketId": "ticket-123",
  "message": "...",
  "isInternal": false,
  "user": {...},
  "createdAt": "2024-01-15T13:00:00Z"
}
```

#### Get Ticket Statistics
```
GET /api/tickets/stats/overview

Response:
{
  "totalTickets": 150,
  "openTickets": 45,
  "inProgressTickets": 30,
  "resolvedTickets": 50,
  "closedTickets": 25,
  "highPriorityTickets": 12,
  "overdueTickets": 5
}
```

#### Get My Tickets (Client View)
```
GET /api/tickets/my/tickets?page=1&limit=10

Response: Same as list tickets response
```

#### Search Tickets
```
GET /api/tickets/search/query?q=search+term

Response: Array of matching tickets
```

---

## Client Dashboard Implementation

### 1. Ticket Submission Form

```tsx
// components/TicketForm.tsx
import { useState, useEffect } from 'react';

export function TicketSubmissionForm() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categoryId: '',
    priority: 'medium',
    dueDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Fetch ticket categories on mount
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets/categories/list`
      );
      const result = await response.json();
      setCategories(result);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create ticket');
      }

      const result = await response.json();
      setSuccess(`Ticket created: ${result.ticketNumber}`);
      setFormData({
        title: '',
        description: '',
        categoryId: '',
        priority: 'medium',
        dueDate: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Submit a Support Ticket</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded text-green-700">
          {success}
        </div>
      )}

      <div className="space-y-4">
        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select a category...</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Brief description of your issue"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Detailed explanation of the issue..."
            rows={4}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Due Date (Optional)
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Submitting...' : 'Submit Ticket'}
        </button>
      </div>
    </form>
  );
}
```

### 2. Ticket List View

```tsx
// components/TicketsList.tsx
import { useState, useEffect } from 'react';

export function TicketsList() {
  const [tickets, setTickets] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [filters, setFilters] = useState({
    status: 'open',
    categoryId: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, [pagination.page, filters]);

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v)),
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets/my/tickets?${params}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      const result = await response.json();
      setTickets(result.tickets);
      setPagination((prev) => ({
        ...prev,
        total: result.pagination.total,
      }));
    } catch (err) {
      console.error('Failed to fetch tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      open: 'bg-red-100 text-red-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      resolved: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800',
    };
    return colors[status] || colors.open;
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      low: '🟢',
      medium: '🟡',
      high: '🔴',
    };
    return icons[priority] || '';
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold mb-4">My Support Tickets</h2>

        {/* Filters */}
        <div className="flex gap-4">
          <select
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, status: e.target.value }))
            }
            className="border rounded px-3 py-2"
          >
            <option value="">All Statuses</option>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="p-6 text-center">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Ticket #
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-3 font-mono text-sm">
                    {ticket.ticketNumber}
                  </td>
                  <td className="px-6 py-3">{ticket.title}</td>
                  <td className="px-6 py-3">
                    {ticket.category && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
                        {ticket.category.icon} {ticket.category.name}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3">
                    {getPriorityIcon(ticket.priority)} {ticket.priority}
                  </td>
                  <td className="px-6 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="p-4 border-t flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
          {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
          {pagination.total} tickets
        </span>
        <div className="flex gap-2">
          <button
            onClick={() =>
              setPagination((prev) => ({
                ...prev,
                page: Math.max(1, prev.page - 1),
              }))
            }
            disabled={pagination.page === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
            }
            disabled={pagination.page * pagination.limit >= pagination.total}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## Admin Dashboard Implementation

### 1. Ticket Analytics Dashboard

```tsx
// components/admin/TicketAnalytics.tsx
import { useState, useEffect } from 'react';

export function TicketAnalyticsDashboard() {
  const [stats, setStats] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, ticketsRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets/stats/overview`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }),
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets?limit=50`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }),
      ]);

      const statsData = await statsRes.json();
      const ticketsData = await ticketsRes.json();

      setStats(statsData);
      setTickets(ticketsData.tickets);
    } catch (err) {
      console.error('Failed to fetch dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Tickets"
          value={stats.totalTickets}
          color="bg-blue-100"
        />
        <StatCard
          title="Open"
          value={stats.openTickets}
          color="bg-red-100"
        />
        <StatCard
          title="In Progress"
          value={stats.inProgressTickets}
          color="bg-yellow-100"
        />
        <StatCard
          title="Resolved"
          value={stats.resolvedTickets}
          color="bg-green-100"
        />
      </div>

      {/* Recent Tickets Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h3 className="text-xl font-bold">Recent Tickets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Ticket
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Responses
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <div>
                      <div className="font-mono text-sm">
                        {ticket.ticketNumber}
                      </div>
                      <div className="text-sm text-gray-600">
                        {ticket.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    {ticket.category && (
                      <span
                        className="px-3 py-1 rounded-full text-sm text-white"
                        style={{ backgroundColor: ticket.category.color }}
                      >
                        {ticket.category.icon} {ticket.category.name}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    {ticket.createdByProfile?.fullName}
                  </td>
                  <td className="px-6 py-3">
                    <span className="px-2 py-1 rounded text-sm bg-blue-100 text-blue-800">
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm">{ticket.priority}</td>
                  <td className="px-6 py-3 text-sm text-center">
                    {ticket._count?.responses || 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className={`${color} rounded-lg p-6`}>
      <h4 className="text-sm font-medium text-gray-700">{title}</h4>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
```

---

## Running the Script

To seed all the support ticket categories into your database:

```bash
npm run db:seed:ticket-categories
```

After seeding, the categories will be available via the API endpoints and can be used immediately in both dashboards.

---

## Status Values

- `open` - Ticket just created
- `in_progress` - Staff member is working on it
- `resolved` - Issue is resolved, awaiting client confirmation
- `closed` - Ticket is closed

## Priority Levels

- `low` - Standard support
- `medium` - Important but not urgent
- `high` - Urgent, requires immediate attention

---

**Last Updated**: March 2026
