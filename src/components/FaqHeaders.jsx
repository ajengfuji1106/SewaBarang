import Accordion from "./Accordion";
import "./FaqHeaders.css";

const FaqHeaders = () => {
  return (
    <div className="faq-headers">
      <div className="headers">
        <div className="titles">
          <div className="labels">
            <h3 className="panduan">Panduan</h3>
          </div>
          <h1 className="pilih-topik-sesuai">
            Pilih Topik Sesuai Kendala Penyewaanmu
          </h1>
        </div>
      </div>
      <div className="faq-categories">
        <div className="category-search-bar">
          <div className="searchbar">
            <div className="searchbar-child" />
            <img
              className="akun-3-icon"
              loading="lazy"
              alt=""
              src="/akun-3@2x.png"
            />
            <div className="category-description">
              <b className="akun-dan-keamanan">{`Akun dan Keamanan `}</b>
            </div>
          </div>
          <div className="searchbar1">
            <div className="searchbar-item" />
            <img
              className="pembayaran-1-icon"
              loading="lazy"
              alt=""
              src="/pembayaran-1@2x.png"
            />
            <div className="pembayaran-wrapper">
              <b className="pembayaran">Pembayaran</b>
            </div>
          </div>
          <div className="searchbar2">
            <div className="searchbar-inner" />
            <img
              className="penggelapan-1-icon"
              loading="lazy"
              alt=""
              src="/penggelapan-1@2x.png"
            />
            <div className="penipuan-penggelapan-wrapper">
              <b className="penipuan-penggelapan">{`Penipuan & Penggelapan`}</b>
            </div>
          </div>
          <div className="searchbar3">
            <div className="rectangle-div" />
            <img
              className="pengembalian-1-icon"
              loading="lazy"
              alt=""
              src="/pengembalian-1@2x.png"
            />
            <div className="pengembalian-dana-wrapper">
              <b className="pengembalian-dana">Pengembalian Dana</b>
            </div>
          </div>
          <div className="searchbar4">
            <div className="searchbar-child1" />
            <img
              className="informasi-1-icon"
              loading="lazy"
              alt=""
              src="/informasi-1@2x.png"
            />
            <div className="informasi-umum-wrapper">
              <b className="informasi-umum">Informasi Umum</b>
            </div>
          </div>
          <div className="searchbar5">
            <div className="searchbar-child2" />
            <b className="lainnya">Lainnya</b>
          </div>
          <img
            className="lainnya-1-icon"
            loading="lazy"
            alt=""
            src="/lainnya-1@2x.png"
          />
        </div>
      </div>
      <div className="headers1">
        <div className="frame-div">
          <div className="frequently-asked-question-wrapper">
            <h3 className="frequently-asked-question">
              Frequently Asked Question
            </h3>
          </div>
          <h1 className="pertanyaan-yang-sering1">
            Pertanyaan yang Sering Diajukan
          </h1>
        </div>
      </div>
      <div className="faq-accordion">
        <div className="accordion-list">
          <Accordion
            pertanyaanYangSeringMuncu="Bagaimana cara menyewa barang di Zerent?"
            vector205="/vector-205.svg"
            loremIpsumDolorSitAmetCon="Anda bisa menyewa barang di Zerent dengan membuat akun terlebih dahulu, memilih barang yang diinginkan, melakukan pembayaran menggunakan QRIS yang kami sediakan, menentukan opsi pengiriman dan mendiskusikannya dengan toko, dan mengembalikannya setelah masa sewa berakhir."
          />
          <Accordion
            pertanyaanYangSeringMuncu="Bagaimana jika barang yang sedang disewa rusak ketika sedang digunakan?"
            vector205="/vector-205-1.svg"
            loremIpsumDolorSitAmetCon="Jika sebelumnya barang yang disewa tidak terdapat kerusakan apapun, kemudian rusak ketika sedang digunakan maka kerusakan menjadi tanggung jawab penyewa dan harus memberikan biaya ganti rugi sesuai dengan yang sudah disepakati."
            propMinWidth="558px"
          />
          <Accordion
            pertanyaanYangSeringMuncu="Bagaimana cara pengaduan kerusakan barang?"
            vector205="/vector-205-2.svg"
            loremIpsumDolorSitAmetCon="Untuk pengaduan pesanan di Zerent, Anda perlu ke halaman pesanan bagian digunakan dan laporkan kerusakan. Di sana terdapat opsi untuk membatalkan pesanan. Anda akan diarahkan untuk mengisi form pengaduan dan mengirimkannya. Anda akan mendapatkan informasi selanjutnya 2-5 hari setelah laporan diajukan."
            propMinWidth="362px"
          />
          <Accordion
            pertanyaanYangSeringMuncu="Bagaimana cara pembayaran di Zerent?"
            vector205="/vector-205-3.svg"
            loremIpsumDolorSitAmetCon="Untuk melakukan pembayaran di Zerent, Anda dapat menggunakan QRIS sebagai metode pembayaran. Setelah Anda memilih barang yang ingin dibeli dan masuk ke proses checkout, QRIS akan ditampilkan. Anda dapat memindainya menggunakan aplikasi pembayaran digital atau dompet elektronik Anda. Setelah transaksi berhasil, tunggulah konfirmasi dari Zerent bahwa pembayaran Anda telah diterima. Dengan cara ini, Anda dapat melakukan pembayaran di Zerent dengan mudah dan cepat menggunakan QRIS."
            propMinWidth="301px"
          />
          <Accordion
            pertanyaanYangSeringMuncu="Apakah ada biaya tambahan yang perlu saya bayar selain biaya sewa?"
            vector205="/vector-205-4.svg"
            loremIpsumDolorSitAmetCon="Tidak ada biaya tambahan kecuali biaya sewa, namun akan dikenakan biaya sanksi jika terdapat kerusakan pada barang ketika sedang digunakan oleh pihak penyewa."
            propMinWidth="533px"
          />
          <Accordion
            pertanyaanYangSeringMuncu="Bagaimana cara pengambilan dan pengembalian barang yang disewa?"
            vector205="/vector-205-5.svg"
            loremIpsumDolorSitAmetCon="Pengambilan barang dilakukan dengan menentukan waktu dan lokasi dengan penyedia, sedangkan pengembalian dilakukan sesuai kesepakatan sebelum masa sewa berakhir"
            propMinWidth="536px"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqHeaders;
