import React, { useState, useEffect, useRef } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Queries() {
  const [customers, setCustomers] = useState([]);
  const dt = useRef(null);

  useEffect(() => {
    fetch('https://backend.arure.solutions/getallqueries')
      .then(response => response.json())
      .then(data => setCustomers(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const exportPdf = () => {
    const columns = [
      { title: 'Name', dataKey: 'name' },
      { title: 'Email', dataKey: 'email' },
      { title: 'Contact', dataKey: 'contact' },
    ];

    const doc = new jsPDF();
    doc.autoTable(columns, customers);
    doc.save('customers.pdf');
  };

  const header = (
    <div className="flex justify-end items-center gap-x-3">
      <Button type="button" icon="pi pi-file" className='bg-blue-500 text-white' rounded onClick={exportCSV} data-pr-tooltip="CSV"/>
      <Button type="button" icon="pi pi-file-pdf" className='bg-orange-500 text-white' rounded onClick={exportPdf} data-pr-tooltip="PDF" />
    </div>
    
  );

  return (
    <PrimeReactProvider>
      <Header/>
      <div className='w-4/5 m-auto my-5'>
        <h2 className='text-3xl mb-4'>User Queries</h2>
        <DataTable ref={dt} value={customers} header={header} paginator rows={10} className='border border-gray-300'>
          <Column field="name" header="Name" ></Column>
          <Column field="email" header="Email"></Column>
          <Column field="contact" header="Contact"></Column>
        </DataTable>
      </div>
      <Footer/>
    </PrimeReactProvider>
  );
}
