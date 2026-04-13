import React from 'react';
import { useEffect, useState } from 'react';

const AccountsTab = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                // Replace with actual API endpoint
                const response = await fetch('/api/clients?status=pending');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setClients(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    if (loading) return <div>Loading clients...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Clients with Pending Payments</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}> {client.name} - {client.pendingPaymentAmount} </li>
                ))}
            </ul>
            <h2>Payment History</h2>
            {/* Payment history logic can be implemented here */}
        </div>
    );
};

export default AccountsTab;
