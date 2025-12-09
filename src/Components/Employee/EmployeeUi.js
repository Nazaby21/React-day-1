import React, { useState, useEffect } from "react";

export default function App() {
  const API = "http://localhost:3001/employees"; // FIXED

  const [form, setForm] = useState({ name: "", age: "", DOB: "" });
  const [employees, setEmployees] = useState([]);

  // Load data
  const loadEmployees = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setEmployees(data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", age: "", DOB: "" });
    loadEmployees();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    loadEmployees();
  };

  return (
    <div className="container py-5">
      {/* HEADER */}
      <h1 className="text-center mb-5 fw-bold text-primary">
        Employee Management
      </h1>

      {/* FORM CARD */}
      <div className="card shadow-lg mb-5">
        <div className="card-body">
          <h3 className="card-title mb-4 text-primary">Add Employee</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* NAME */}
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* AGE */}
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Age</label>
                <input
                  type="number"
                  name="age"
                  className="form-control"
                  placeholder="Enter age"
                  value={form.age}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* DOB */}
              <div className="col-12 mb-3">
                <label className="form-label fw-semibold">Date of Birth</label>
                <input
                  type="text"
                  name="DOB"
                  className="form-control"
                  placeholder="Example: 08/Jan/2025"
                  value={form.DOB}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button className="btn btn-primary w-100 mt-2">Add Employee</button>
          </form>
        </div>
      </div>

      {/* EMPLOYEE LIST */}
      <div className="card shadow-lg">
        <div className="card-body">
          <h3 className="card-title text-primary mb-4">Employee List</h3>

          {employees.length === 0 ? (
            <p className="text-muted text-center">No employees found...</p>
          ) : (
            <div className="list-group">
              {employees.map((emp) => (
                <div
                  key={emp.id}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h5 className="mb-1 fw-bold">{emp.name}</h5>
                    <p className="mb-0 text-muted">Age: {emp.age}</p>
                    <p className="mb-0 text-muted">DOB: {emp.DOB}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
