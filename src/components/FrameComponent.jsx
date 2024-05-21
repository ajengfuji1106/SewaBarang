import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="frame-group">
      <header className="frame-container">
        <div className="frame-child" />
        <form className="navbar-revisi">
          <div className="nav-color">
            <div className="logo-searchbar">
              <img
                className="logo-icon"
                loading="lazy"
                alt=""
                src="/logo@2x.png"
              />
              <div className="logo-searchbar-inner">
                <div className="search-parent">
                  <div className="search">
                    <div className="frame">
                      <img
                        className="leading-icon"
                        alt=""
                        src="/leading-icon.svg"
                      />
                      <input
                        className="search1"
                        placeholder="Search"
                        type="text"
                      />
                      <img className="trailing-icon" alt="" />
                    </div>
                  </div>
                  <button className="primary-button">
                    <b className="buka-toko">Cari</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="button-navbar-wrapper">
              <div className="button-navbar">
                <div className="bell-parent">
                  <img
                    className="bell-icon"
                    loading="lazy"
                    alt=""
                    src="/bell.svg"
                  />
                  <div className="notifikasi-wrapper">
                    <b className="notifikasi">Notifikasi</b>
                  </div>
                </div>
                <div className="button-navbar-inner">
                  <div className="frame-wrapper">
                    <div className="cart3-parent">
                      <img
                        className="cart3-icon"
                        loading="lazy"
                        alt=""
                        src="/cart3.svg"
                      />
                      <b className="keranjang">Keranjang</b>
                    </div>
                  </div>
                </div>
                <div className="button-navbar-child">
                  <div className="box-parent">
                    <img
                      className="box-icon"
                      loading="lazy"
                      alt=""
                      src="/box.svg"
                    />
                    <b className="pesanan">Pesanan</b>
                  </div>
                </div>
                <button className="primary-button1">
                  <b className="buka-toko1">Daftar</b>
                </button>
              </div>
            </div>
          </div>
          <div className="nav-putih">
            <div className="primary-button2">
              <b className="pilih-kategori-barang">Pilih Kategori Barang</b>
              <div className="chevron-wrapper">
                <img className="chevron-icon" alt="" src="/chevron.svg" />
              </div>
            </div>
            <div className="katalog-button-list-wrapper">
              <div className="katalog-button-list">
                <div className="secondary-button">
                  <div className="katalog">Beranda</div>
                </div>
                <div className="secondary-button1">
                  <div className="katalog1">Katalog</div>
                </div>
                <div className="secondary-button2">
                  <div className="katalog2">Favorite</div>
                </div>
                <div className="secondary-button3">
                  <div className="katalog3">Chat</div>
                </div>
                <button
                  className="secondary-button4"
                  onClick={onSecondaryButtonClick}
                >
                  <div className="katalog4">Bantuan</div>
                </button>
              </div>
            </div>
            <div className="alamat-wrapper">
              <div className="alamat">
                <div className="secondary-button5">
                  <b className="secondary-button6">Secondary Button</b>
                </div>
                <img className="search-icon" alt="" src="/search.svg" />
                <input
                  className="terdekat"
                  placeholder="Masukkan Alamat"
                  type="text"
                />
              </div>
            </div>
          </div>
        </form>
      </header>
      <img
        className="untitled-design-icon"
        loading="lazy"
        alt=""
        src="/untitled-design@2x.png"
      />
    </section>
  );
};

export default FrameComponent;
