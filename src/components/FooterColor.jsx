import { useCallback } from "react";
import "./FooterColor.css";

const FooterColor = () => {
  const onFacebookIconClick = useCallback(() => {
    window.open("https://id-id.facebook.com/");
  }, []);

  const onMessengerIconClick = useCallback(() => {
    window.open("https://www.messenger.com/");
  }, []);

  const onTelegramIconClick = useCallback(() => {
    window.open("https://web.telegram.org/");
  }, []);

  return (
    <footer className="footer-color">
      <div className="footer-color-child" />
      <div className="footer-content">
        <div className="footer-columns">
          <div className="about-us-column">
            <div className="about-us">
              <b className="zerent">Zerent</b>
              <div className="zerent-description">
                <div className="zerent-adalah-platform-container">
                  <span>{`Zerent adalah platform `}</span>
                  <i>e-commerce</i>
                  <span>
                    {" "}
                    inovatif yang mengkhususkan dalam penyewaan barang dari
                    berbagai kategori. Zerent juga menyediakan fitur permintaan
                    untuk penyediaan stok barang yang kalian butuhkan.
                  </span>
                </div>
                <div className="facebook-wrapper">
                  <img
                    className="facebook-icon"
                    loading="lazy"
                    alt=""
                    src="/facebook.svg"
                    onClick={onFacebookIconClick}
                  />
                </div>
              </div>
              <img
                className="messenger-icon"
                loading="lazy"
                alt=""
                src="/messenger.svg"
                onClick={onMessengerIconClick}
              />
              <img
                className="telegram-icon"
                loading="lazy"
                alt=""
                src="/telegram@2x.png"
                onClick={onTelegramIconClick}
              />
            </div>
            <div className="mailing-list">
              <div className="mailing-list-content">
                <div className="stay-in-the-loop">
                  <div className="loop-title">
                    <b className="terus-ikuti-perkembangan">
                      Terus ikuti Perkembangan
                    </b>
                  </div>
                  <div className="join-mailing-list">
                    <div className="bergabunglah-dengan-mailling">
                      Bergabunglah dengan mailling list kami untuk terus
                      mengikuti perkembangan info-info menarik dari kami
                    </div>
                  </div>
                  <div className="field-email">
                    <div className="field-email-child" />
                    <div className="masukkan-email">Masukkan email</div>
                  </div>
                </div>
                <button className="primary-button3">
                  <b className="buka-toko2">Bergabung</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="customer-care">
          <b className="logo">Logo</b>
          <div className="bantuan-pengembalian-barang-container">
            <p className="bantuan">Bantuan</p>
            <p className="pengembalian-barang">Pengembalian Barang</p>
            <p className="syarat-ketentuan">{`Syarat & Ketentuan`}</p>
            <p className="faq">FAQ</p>
          </div>
        </div>
      </div>
      <div className="copyright-wrapper">
        <div className="copyright">
          <div className="copyright-child" />
          <div className="copyright-2024-curtinaambhil-wrapper">
            <div className="copyright-2024">
              Copyright © 2024 CurtinaAmbhilasa
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterColor;
