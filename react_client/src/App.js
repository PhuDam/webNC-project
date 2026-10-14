import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './Mynav';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // QUAN TRỌNG: Hãy thay thế URL dưới đây bằng URL Codespace cổng 9000 của bạn
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

  if (!data) return <div className="text-center mt-5 fs-4">Loading...</div>;

  return (
    <div className="App">
      <Mynav />

      {/* Banner */}
      <Carousel>
        {}
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

      {/* Content */}
      <div className="container mt-4">
        <Table bordered hover responsive className="mb-5">
          <thead className="table-light text-start">
            <tr>
              <th className="fw-bold">Name</th>
              <th className="fw-bold">ID</th>
              <th className="fw-bold">Status</th>
            </tr>
          </thead>
          <tbody className="text-start">
            {/* Sử dụng hàm map() để lặp qua danh sách data */}
            {/* Mỗi 'item' đại diện cho 1 người trong danh sách từ Backend gửi về */}
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Footer />
    </div>
  );
}

export default App;