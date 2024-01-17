import React from 'react';
import Table from 'react-bootstrap/Table';


const Tabelb = ({ Peminjams, editData, hapusData}) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Peminjam</th>
          <th>Nama Buku</th>
          <th>Tanggal Masuk</th>
          <th>Tanggal Keluar</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {Peminjams.map((pinjam, index) => {
            return(
            <tr>
              <td>{index + 1}</td>
              <td>{pinjam.NamaPeminjam}</td>
              <td>{pinjam.NamaBuku}</td>
              <td>{pinjam.TanggalMasuk}</td>
              <td>{pinjam.TanggalKeluar}</td>
              <td>
                <button className="btn btn-warning mr-1" onClick={() => editData(pinjam.id)}>Edit</button>
                <button className="btn btn-danger mr-1" onClick={() => hapusData(pinjam.id)}>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabelb;