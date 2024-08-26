import { Carousel } from "flowbite-react";
import "./App.css";

function App() {
  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`fixed w-screen h-screen overflow-y-scroll overflow-x-hidden bg-landing-bg-2 bg-cover px-2 md:px-0`}
    >
      <div
        id="navbar"
        className="fixed top-10 left-1/2 px-[20px] transform -translate-x-1/2 w-full max-w-screen-xl h-[75px] rounded-xl bg-white bg-opacity-20 backdrop-blur-sm shadow-md z-50"
      >
        <ul className="list-none flex w-full h-full items-center justify-center gap-24 mx-auto text-black">
          <li className="nav-item">
            <a
              href="#insan-akademisi"
              className="relative font-semibold text-xl font-montserrat"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("insan-akademisi");
              }}
            >
              İnsan Akademisi
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#basvurus"
              className="relative font-semibold text-xl font-montserrat"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("mission");
              }}
            >
              Başvuru
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#iletisim"
              className="relative font-semibold text-xl font-montserrat"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("mission");
              }}
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>
      <div
        id="landing"
        className="relative w-full max-w-screen-xl h-screen flex flex-col justify-between items-center mx-auto py-12"
      >
        <div></div>
        <div className="grid grid-cols-2 w-full mt-[110px]">
          <div className="hidden md:block">&nbsp;</div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 bg-white bg-opacity-20 backdrop-blur-sm shadow-md rounded-xl px-8 p-4">
            <span className="text-3xl text-black font-semibold">
              <span className="relative">
                Marifet ve Erdem
                <div className="absolute bottom-2 w-full h-[4px] bg-chesnut -z-10"></div>
              </span>
              <br /> Araştırmaları <br /> Enstitüsü
            </span>
            <p className="text-lg text-black">
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
        <div className="flex items-center justify-between w-full h-[75px] bg-chesnut backdrop-blur-sm shadow-md rounded-xl px-[20px]">
          <div className="flex flex-col">
            <span className="text-md md:text-lg font-semibold text-[#fff0db]">
              İnsan Akademisi Başvuruları Devam Ediyor!
            </span>
            <span className="text-xs md:text-sm text-[#fff0db]">
              Son başvuru tarihi 17 Eylül 2021
            </span>
          </div>
          <button className="flex items-center justify-center px-4 py-2 bg-white rounded-full h-[40px] border border-white box-border hover:bg-transparent hover:text-white cursor-pointer hover:shadow-md hover:scale-105 tansition-all duration-300">
            Başvuru Formu
          </button>
        </div>
      </div>

      <div
        id="insan-akademisi"
        className="flex flex-col gap-4 max-w-screen-xl mx-auto pt-36 pb-20"
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
        <div className="flex flex-col space-y-4 w-full rounded-xl bg-white bg-opacity-20 backdrop-blur-sm shadow-md px-8 py-4">
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
      </div>
    </div>
  );
}

export default App;
