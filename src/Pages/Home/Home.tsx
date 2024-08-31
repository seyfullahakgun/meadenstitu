import {
  Carousel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import {
  IoCloseSharp,
  IoLocationSharp,
  IoMail,
  IoMenuSharp,
} from "react-icons/io5";
import "./Home.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      smoothScroll(id);
      setIsMenuOpen(false); // Close menu on link click
    };

  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed w-screen h-screen overflow-y-scroll overflow-x-hidden bg-landing-bg-1 bg-cover px-2 md:px-0 bg-center`}
    >
      {/* Hamburger Button for Mobile */}
      <div
        className={`md:hidden fixed top-8 left-6 flex items-center justify-between z-[100] bg-white bg-opacity-70 p-3 rounded-lg ${
          isMenuOpen ? "shadow-md" : "shadow-none"
        }`}
      >
        <button
          id="hamburger"
          className="text-primary text-2xl"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
        </button>
      </div>

      <div
        id="navbar"
        className="hidden md:block fixed top-10 left-1/2 px-4 transform -translate-x-1/2 w-full max-w-screen-xl h-[75px] rounded-xl bg-white bg-opacity-20 backdrop-blur-xl shadow-md z-50"
      >
        {/* Navigation Links for Desktop */}
        <ul
          id="nav-links"
          className="hidden md:flex w-full h-full items-center justify-center gap-24 mx-auto text-black"
        >
          <li className="nav-item">
            <a
              href="#insan-akademisi"
              className="relative font-semibold text-xl font-montserrat"
              onClick={handleLinkClick("insan-akademisi")}
            >
              İnsan Akademisi
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#mufredat"
              className="relative font-semibold text-xl font-montserrat"
              onClick={handleLinkClick("mufredat")}
            >
              Müfredat
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#basvuru"
              className="relative font-semibold text-xl font-montserrat"
              onClick={handleLinkClick("basvuru")}
            >
              Başvuru
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#iletisim"
              className="relative font-semibold text-xl font-montserrat"
              onClick={handleLinkClick("iletisim")}
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className={`md:hidden fixed left-1/2 transform -translate-x-1/2 w-full bg-white bg-opacity-80 backdrop-blur-xl shadow-lg z-50 transition-transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <li className="nav-item py-4 text-center">
          <a
            href="#insan-akademisi"
            className="relative font-semibold text-xl font-montserrat"
            onClick={handleLinkClick("insan-akademisi")}
          >
            İnsan Akademisi
          </a>
        </li>
        <li className="nav-item py-4 text-center">
          <a
            href="#mufredat"
            className="relative font-semibold text-xl font-montserrat"
            onClick={handleLinkClick("mufredat")}
          >
            Müfredat
          </a>
        </li>
        <li className="nav-item py-4 text-center">
          <a
            href="#basvuru"
            className="relative font-semibold text-xl font-montserrat"
            onClick={handleLinkClick("basvuru")}
          >
            Başvuru
          </a>
        </li>
        <li className="nav-item py-4 text-center">
          <a
            href="#iletisim"
            className="relative font-semibold text-xl font-montserrat"
            onClick={handleLinkClick("iletisim")}
          >
            İletişim
          </a>
        </li>
      </ul>

      <div
        id="landing"
        className="relative w-full max-w-screen-xl h-screen flex flex-col justify-between items-center mx-auto py-12"
      >
        <div></div>
        <div className="grid grid-cols-2 w-full mt-[110px] ">
          <div className="hidden md:block">&nbsp;</div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 bg-primary bg-opacity-95 backdrop-blur-sm shadow-md shadow-parimary rounded-xl px-8 p-4">
            <span className="text-3xl text-secondary font-[700]">
              <span className="relative">
                Marifet ve Erdem
                <div className="absolute bottom-2 w-full h-[4px] bg-chesnut -z-10"></div>
              </span>
              <br /> Araştırmaları <br /> Enstitüsü
            </span>
            <p className="text-lg text-secondary font-[500]">
              Marifet ve Erdem Araştırmaları Enstitüsü (MEAD), insanlığın temel
              varoluşsal, ahlaki ve felsefi sorularını ele alarak, bu konularda
              farkındalık yaratmayı amaçlayan bir eğitim programı sunar. MEAD,
              öğrenci ve eğitmenleri bir araya getirerek, bu derin sorular
              üzerinde teorik ve pratik olarak birlikte çalışmayı hedefler.
              Katılımcılara, bu soruların gölgesinde yaşamanın anlamını keşfetme
              imkânı tanır.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-[75px] bg-chesnut backdrop-blur-sm shadow-md rounded-xl px-[20px] mt-4">
          <div className="flex flex-col">
            <span className="text-md md:text-lg font-semibold text-[#fff0db]">
              İnsan Akademisi Başvuruları Devam Ediyor!
            </span>
            <span className="text-xs md:text-sm text-[#fff0db]">
              Son başvuru tarihi 20 Eylül 2024
            </span>
          </div>
          <a
            href="https://forms.gle/RwXJ7EUGXwCW3WKV6"
            target="_blank"
            className="flex items-center justify-center px-4 py-2 bg-white rounded-full h-[40px] border border-white box-border hover:bg-transparent hover:text-white cursor-pointer hover:shadow-md hover:scale-105 tansition-all duration-300"
          >
            Başvuru Formu
          </a>
        </div>
      </div>

      <div
        id="insan-akademisi"
        className="flex flex-col gap-12 max-w-screen-xl mx-auto pt-36 pb-20"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-center text-4xl text-center text-white text-shadow-xl font-[900]">
            Bu Soruları <br /> Hiç Sordunuz mu?
          </div>
          <div className="flex my-auto">
            <Carousel slideInterval={3000} className="h-[300px] md:h-[350px]">
              <img
                src="/media/images/questions/q01.jpg"
                alt="q1"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q02.jpg"
                alt="q2"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q03.jpg"
                alt="q3"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q04.jpg"
                alt="q4"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q05.jpg"
                alt="q5"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q06.jpg"
                alt="q6"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q07.jpg"
                alt="q7"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q08.jpg"
                alt="q8"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q09.jpg"
                alt="q9"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q10.jpg"
                alt="q10"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q11.jpg"
                alt="q11"
                className="rounded-lg"
              />
              <img
                src="/media/images/questions/q12.jpg"
                alt="q12"
                className="rounded-lg"
              />
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-full rounded-xl bg-primary bg-opacity-95 backdrop-blur-sm text-secondary font-[500] shadow-md px-8 py-4">
          <p>
            <b>Marifet ve Erdem Araştırmaları Enstitüsü (MEAD)</b> kurulduktan
            sonra böylesi sorulardan hareketle bu programın içeriğini
            oluşturmayı düşünmedi. Tam tersine MEAD bu sorular uğruna kuruldu.
            Şimdi ise insan olmanın beraberinde getirdiği sorunları temele alan
            bir eğitim programını sizlere takdim etmenin heyecanını duyuyor ve
            bizimle bu yola çıkacak yol arkadaşlarımızı arıyoruz.
          </p>
          <p>
            Bizler; yukarıdaki soruların zamana bağımlı olmadığını varsayıyor,
            sürekli olarak onların gölgesinde yaşadığımızı düşünüyoruz. Bunlar
            insanlığın ‘Sıkça Sorulan Sorular’ıdır. Fakat hayat meşgalesi,
            yaşama uğraşısı, modern dünya, teknoloji vb. oyunbozan-oyun kuran
            evreler bu soruların üstünü toprak gibi örtse de fark edebilen, fark
            etmeyi isteyen için gölge toprağın üstünde kalmaya devam ediyor.
            MEAD insan akademisi işte bu sorulara dair
            verilmiş-verilen-verilecek çözüm önerileri ve yaklaşımlarını fark
            ettirmeyi hedefleyen bir program ile sizi buluşturmaktadır.
          </p>
          <p>
            MEAD eğitim programının amacı, insana ilişkin bu soru ve araştırma
            alanlarını birlikte konuşup tartışacağınız hocalarla sizleri bir
            araya getirmek, tartışarak öğrenmenizi ve bu derin problemler
            üzerinde birlikte çalışarak gerçek bir ilerleme kaydetmenizi
            sağlamaktır. Bu ilerlemenin teorik ve pratik olarak iki farklı yönü
            bulunmaktadır. Bu ayrıma uygun olarak, teorik bilginin yanında
            pratik uygulamayı da önemseyen programımız her ne kadar ilk aşamada
            temel sorulara ilişkin öne sürülen teorik tezlerle alakalı ‘niçin’
            sorusuna odaklansa da ilerleyen aşamalarda ‘nasıl’ sorusuna
            yoğunlaşarak öğrencilerini/yolcularını uygulama bilgisi içeren
            derslerle, uygulayıcı kişilerle buluşturmaktadır.
          </p>
        </div>
        <h2
          id="mufredat"
          className="w-full text-4xl text-center text-white text-shadow-xl font-[900] pt-32"
        >
          Derslerimiz
        </h2>
        <div className="w-full rounded-xl bg-primary shadow-md overflow-scroll md:overflow-hidden -mt-8">
          <Table className="w-full text-secondary shadow-none bg-transparent">
            <TableHead className="bg-secondary text-primary">
              <TableHeadCell className="bg-transparent">Kademe</TableHeadCell>
              <TableHeadCell className="bg-transparent">Dönem</TableHeadCell>
              <TableHeadCell className="bg-transparent">Ders</TableHeadCell>
              <TableHeadCell className="bg-transparent">Eğitmen</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow>
                <TableCell rowSpan={6}>1. Kademe</TableCell>
                <TableCell rowSpan={3}>Güz</TableCell>
                <TableCell>Varlık</TableCell>
                <TableCell>İhsan Fazlıoğlu</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Birliğin Metafizik Boyutları</TableCell>
                <TableCell>İbrahim Halil Üçer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Metafizik Bilginin İmkanı ve Nübüvvet</TableCell>
                <TableCell>Ömer Türker</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}>Bahar</TableCell>
                <TableCell>İnancın Boyutları</TableCell>
                <TableCell>Eşref Altaş</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hayat, Ölüm ve Sonrası</TableCell>
                <TableCell>Abuzer Dişkaya</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>İyilik ve Kötülük</TableCell>
                <TableCell>Ferhat Yöney</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={6}>2. Kademe</TableCell>
                <TableCell rowSpan={3}>Güz</TableCell>
                <TableCell>İnsanın Fiilleri ve Sorumluluğu</TableCell>
                <TableCell>Sami Turan Erel</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Sorumluluğun Zemini, Gayesi ve Fiillerimiz
                </TableCell>
                <TableCell>Nail Okuyucu</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Terk ve Gerçekliğe Yöneliş</TableCell>
                <TableCell>Ahmet Murat Özel</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}>Bahar</TableCell>
                <TableCell>İrade ve İktidar</TableCell>
                <TableCell>Tahsin Görgün</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dünya, Özgürlük ve Arzu</TableCell>
                <TableCell>Ayhan Çitil</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Benin Dünyası</TableCell>
                <TableCell>Latif Karagöz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={6}>3. Kademe</TableCell>
                <TableCell rowSpan={3}>Güz</TableCell>
                <TableCell>Gerçek Fail ve Benin Eleştirisi</TableCell>
                <TableCell>Taha Boyalık</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>İyi ve Kötü Geriliminde İrade Direnci</TableCell>
                <TableCell>Zeynep Şeyma Özkan</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gerçek Fail ve Nedenselliğin Sonu</TableCell>
                <TableCell>Ercan Alkan</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={3}>Bahar</TableCell>
                <TableCell>İlahi Aşk ve Marifet</TableCell>
                <TableCell>Ahmet Murat Özel</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Nasıl Okur ve Yazarız? Kanıta Dayalı Düşünce
                </TableCell>
                <TableCell>Yasin Ramazan</TableCell>
              </TableRow>
              <TableRow className="rounded-none">
                <TableCell>İnsan Onuru ve Beden</TableCell>
                <TableCell>Merve Özaykal</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <h2
        id="basvuru"
        className="w-full text-4xl text-center text-white text-shadow-xl font-[900] pt-32 my-2"
      >
        Başvuru
      </h2>
      <div className="flex flex-col gap-4 w-full md:w-[700px] max-w-screen-lg mx-auto bg-white bg-opacity-70 backdrop-blur-sm shadow-md rounded-xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSekgJ9iUwryZFPY91xOr49uzynrkvDkHPcVZNoegzHcPwTZbA/viewform?embedded=true"
          className="w-full h-[800px]"
        >
          Yükleniyor…
        </iframe>
      </div>
      <h2
        id="iletisim"
        className="w-full text-4xl text-center text-white text-shadow-xl font-[900] pt-32"
      >
        İletişim
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-xl mx-auto gap-12 mt-6 mb-12 bg-white bg-opacity-40 backdrop-blur-xl rounded-[1.5rem] p-4">
        <div className="flex flex-col gap-4 justify-center pl-12">
          <div className="flex items-center gap-4">
            <IoLocationSharp className="text-primary text-2xl w-[48px] h-[48px] md:w-auto md:h-auto" />
            <span className="text-primary font-[500]">
              İskender Baba Tekkesi, Ahmediye, Gündoğumu Cd. 48,
              Üsküdar/İstanbul
            </span>
          </div>
          <a
            href="mailto:meadenstitu@gmail.com"
            className="flex items-center gap-4 hover:translate-x-[20px] hover:scale-105 transition-all duration-300"
          >
            <IoMail className="text-primary text-2xl" />
            <span className="text-primary font-[500]">
              meadenstitu@gmail.com
            </span>
          </a>
          <div className="flex items-center">
            <span className="text-primary font-[500] ml-[39px]">
              Herhangi bir sorunuz ya da öneriniz için bize e-posta gönderebilir
              yahut enstitümüzü ziyaret edebilirsiniz.
            </span>
          </div>
          <div className="flex items-center gap-4 justify-center ">
            <a
              href="https://www.instagram.com/meadenstitu/"
              className="flex items-center justify-center rounded-full w-8 h-8 bg-white text-primary hover:bg-gray-300 transition-all duration-300 border border-primary"
              target="_blank"
            >
              <AiOutlineInstagram className="text-xl" />
            </a>
            <a
              href="https://www.x.com/meadenstitu/"
              className="flex items-center justify-center rounded-full w-8 h-8 bg-white text-primary hover:bg-gray-300 transition-all duration-300 border border-primary"
              target="_blank"
            >
              <FiTwitter className="text-lg" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.288284594468!2d29.01451447665479!3d41.018948471348935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab95df5e720a5%3A0x9f0eedb5b28d0db0!2s%C4%B0skender%20Baba%20Tekkesi!5e0!3m2!1str!2str!4v1724716527911!5m2!1str!2str"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex items-center justify-center w-screen h-[100px] bg-primary -mx-2 px-2 md:mx-auto">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <span className="text-white font-[900]">
            Marifet ve Erdem Araştırmaları Enstitüsü
          </span>
          <div className="flex items-center gap-12">
            <span
              onClick={() => {
                window.open("/kvkk-aydinlatma-metni", "_blank");
              }}
              className="hover:underline text-white cursor-pointer"
            >
              KVKK Aydınlatma Metni
            </span>
            <span
              onClick={() => {
                window.open("/privacy-policy", "_blank");
              }}
              className="hover:underline text-white cursor-pointer"
            >
              Gizlilik Sözleşmesi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
