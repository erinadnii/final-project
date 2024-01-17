

import React from "react";
import Tabelb from "./Tabelb";
import Formulir from "./Formulirb";

export default class Crud2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Peminjams: [],
            NamaPeminjam: "",
            NamaBuku: "",
            TanggalMasuk: "",
            TanggalKeluar: "",
            id: "", 
        }
    }

    handleChange =(event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.id === ""){
            this.setState({
                Peminjams: [
                    ...this.state.Peminjams,
                    {
                        id: this.state.Peminjams.length + 1,
                        NamaPeminjam: this.state.NamaPeminjam,
                        NamaBuku: this.state.NamaBuku,
                        TanggalMasuk: this.state.TanggalMasuk,
                        TanggalKeluar: this.state.TanggalKeluar,
                    },
                ],
            });
        } else {
            const bukuYangSelainDipilih = this.state.Peminjams
            .filter((pinjam) => pinjam.id !== this.state.id)
            .map((filterPinjam) => {
                return filterPinjam;
            });
            
            this.setState({
                Peminjams: [
                  ...bukuYangSelainDipilih,
                  {
                    id: this.state.Peminjams.length + 1,
                    NamaPeminjam: this.state.NamaPeminjam,
                    NamaBuku: this.state.NamaBuku,
                    TanggalMasuk: this.state.TanggalMasuk,
                    TanggalKeluar: this.state.TanggalKeluar,
                  }
                ],
            });
        }
       

        this.setState({
            NamaPeminjam: "",
            NamaBuku: "",
            TanggalMasuk: "",
            TanggalKeluar: "",
            id: "",
        });
    };

    editData = (id) => {
        console.log("id buku", id);
        const bukuYangdipilih = this.state.Peminjams
        .filter((Peminjams) => Peminjams.id === id)
        .map((filterPinjam) => {
            return filterPinjam
        })

        this.setState({
            NamaPeminjam: bukuYangdipilih[0].NamaPeminjam,
            NamaBuku: bukuYangdipilih[0].NamaBuku,
            TanggalMasuk : bukuYangdipilih[0].TanggalMasuk,
            TanggalKeluar : bukuYangdipilih[0].TanggalKeluar,
            id : bukuYangdipilih[0].id,
        })
    };

    hapusData = (id) => {
        const pinjamBaru = this.state.Peminjams
        .filter((pinjam) => pinjam.id !== id)
        .map((filterPinjam) => {
            return filterPinjam
        })

        this.setState({
            peminjaman : pinjamBaru
        })
    }
    render(){
        return(
            <div>
                {/* <NavbarComponent /> */}
                <div className="container mt-4">
                <Tabelb Peminjams={this.state.Peminjams} editData={this.editData} hapusData={this.hapusData} /> 
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
               
               

            </div>
        );
    }
}