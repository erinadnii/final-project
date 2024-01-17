import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulirb = ({NamaBuku, NamaPeminjam, TanggalKeluar, TanggalMasuk, handleChange, handleSubmit, id}) => {
  return (
     <div className='mt-5'>
        <Row>
            <Col>
               <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
               <hr />
            </Col>
        </Row>
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="NamaPeminjam">
        <Form.Label>Nama Peminjam</Form.Label>
        <Form.Control type="text" 
        name="NamaPeminjam"
        value={NamaPeminjam}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="NamaBuku">
        <Form.Label>Nama Buku</Form.Label>
        <Form.Control type="text" 
        name="NamaBuku"
        value={NamaBuku}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="tanggalMasuk">
        <Form.Label>Tanggal Masuk</Form.Label>
        <Form.Control 
        type='date'
        rows="3"
        name="TanggalMasuk"
        value={TanggalMasuk} 
        onChange={(event) => handleChange (event)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="tanggalKeluar">
        <Form.Label>Tanggal Keluar</Form.Label>
        <Form.Control 
        type='date'
        rows="3"
        name="TanggalKeluar"
        aria-describedby='basic-addon3'
        value={TanggalKeluar} 
        onChange={(event) => handleChange (event)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    

    </div>
  );
}

export default Formulirb;