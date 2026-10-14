import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './Mynav';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";

// 1. Import thư viện AG Grid
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

function App() {
  // Khởi tạo data là một mảng rỗng [] thay vì undefined để Grid không bị lỗi
  const [data, setData] = useState([]);

  // 2. Định nghĩa các cột cho Grid
  const [colDefs] = useState([
    { headerName: "Name", field: "name" },
    { headerName: "ID", field: "id" },
    { headerName: "Status", field: "status" }
  ]);

  // 3. Cấu hình Sắp xếp và Lọc mặc định
  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://effective-orbit-g445v747prvv39gjx-9000.app.github.dev/data');
      if (!response.ok) {
        throw new Error('Phản hồi mạng không hợp lệ');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error.message);
    }
  };

  if (!data || data.length === 0) return <div className="text-center mt-5 fs-4">Loading...</div>;

  return (
    <div className="App">
      <Mynav />

      {/* Banner của bạn với 3 hình ảnh tùy chỉnh */}
      <Carousel>
        <Carousel.Item style={{ height: '350px', background: 'linear-gradient(135deg, #0ba39c 0%, #d5f0ee 100%)' }}>
          <img
            className="d-block w-100" 
            src="pngtree-rapeseed-field-in-the-early-morning-of-the-terraced-fields-image_851483.jpg"
            alt="Good Morning"
            style={{ height: '350px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ color: 'white', bottom: '35%' }}>
            <h1 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Good Morning</h1>
            <p className="fs-5" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Spaces and Cybers.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '350px', background: 'linear-gradient(135deg, #0ba39c 0%, #d5f0ee 100%)' }}>
          <img
            className="d-block w-100" 
            src="sunset-5222626_640.jpg"
            alt="Good Afternoon"
            style={{ height: '350px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ color: 'white', bottom: '35%' }}>
            <h1 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Good Afternoon</h1>
            <p className="fs-5" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Cybers and Spaces.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '350px', background: 'linear-gradient(135deg, #0ba39c 0%, #d5f0ee 100%)' }}>
          <img
            className="d-block w-100" 
            src="images.jpg"
            alt="Good Night"
            style={{ height: '350px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ color: 'white', bottom: '35%' }}>
            <h1 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Good Night</h1>
            <p className="fs-5" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Cybers, Spaces and Me.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Content: Bảng AG Grid (Có phân trang 10 dòng) */}
      <div className="container mt-4 mb-5">
        <h5 className="mb-3 text-start fw-bold" style={{ color: '#333' }}>Fetch Data Example on React :</h5>
        
        <div className="ag-theme-quartz" style={{ height: 400, width: '100%' }}>
          <AgGridReact
            rowData={data}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={10} 
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;