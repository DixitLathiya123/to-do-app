const mongodbAggregation = (salesData) => {
    return salesData.reduce((acc, sale) => {
        const month = sale.date.toISOString().slice(0, 7); 
        const store = sale.store;

        const totalRevenue = sale.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

        const key = `${store}-${month}`;
        if (!acc[key]) {
            acc[key] = {
                store,
                month,
                totalRevenue: 0,
                totalQuantity: 0,
                averagePrice: 0,
            };
        }

        acc[key].totalRevenue += totalRevenue;
        acc[key].totalQuantity += sale.items.reduce((sum, item) => sum + item.quantity, 0);
        acc[key].averagePrice = acc[key].totalRevenue / acc[key].totalQuantity;

        return acc;
    }, {});
};

const salesData = [
    {
        date: new Date('2024-06-15T00:00:00Z'),
        store: "Store A",
        items: [
            { name: "item1", quantity: 5, price: 10.0 },
            { name: "item2", quantity: 3, price: 20.0 }
        ]
    },
    {
        date: new Date('2024-06-16T00:00:00Z'),
        store: "Store A",
        items: [
            { name: "item3", quantity: 2, price: 30.0 }
        ]
    }
];

console.log("Aggregation Result:", mongodbAggregation(salesData));
