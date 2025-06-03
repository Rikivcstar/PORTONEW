import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div
        className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1"
        id="home"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="hero"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Beautiful Code, Born From Discipline.👌</q>
          </div>
          <h1 className="lg:text-5xl/tight text-3xl font-bold mb-6">
            Hi, I'm RIKI REZA RYANSYAH{" "}
          </h1>
          <p className=" text-base/loose mb-6 opacity-80">
            <span className="font-bold text-purple-800 mx-1">
              Web Developer,
            </span>
            not just a coder, but a creator of digital experiences who
            transforms abstract ideas into interactive realities. So to Become
            <span className="font-bold text-purple-800 mx-2">
              Trader & Investor
            </span>
            turning analysis into opportunities. With the ability to read market
            patterns and identify trends before anyone else.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href=""
              className="bg-violet-800 p-4 font-bold rounded-2xl hover:bg-violet-500"
            >
              Contact Me
              <i className="ri-download-2-line ml-2 ri-lg"></i>
            </a>
            <a
              href=""
              className="bg-slate-700 p-4 rounded-2xl font-bold hover:bg-slate-500"
            >
              Look a Project <i className="ri-eye-2-line ml-1 ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
          loading="lazy"
        />
      </div>

      {/* section about */}
      <div className="about mt-32 py-10" id="home">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full p-7 mx-auto bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="about mb-3 text-2xl font-bold"> ABOUT ME</div>
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="sm:hidden w-12 rounded-md mb-10"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            distinctio culpa in temporibus fugiat dignissimos fuga quae tenetur
            tempore consequuntur saepe, quasi ea sunt accusantium atque? Cumque
            unde exercitationem laborum quidem eos aspernatur non nihil
            voluptas, asperiores expedita, ipsam rem sunt ab consectetur ratione
            iusto architecto quibusdam ut explicabo velit.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt=""
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Project Finish</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  5 Month<span className="text-violet-500">+</span>
                </h1>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className="text-4xl font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Tools
          </h1>
          <p
            className="w-full text-center text-base/loose opacity-50 "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Berikut Adalah Tools Yg Saya Gunakan dalam Melakukan Develop sebuah
            Program
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
            {listTools.map((tool) => (
              <div
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                data-aos="fade-up"
                data-aos-delay={tool.dad}
                data-aos-duration="1000"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="tools-image"
                  className="w-12 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end Section About */}
      {/* Project me */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2 "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Berikut Adalah Beberapa Project Yg Saya Buat
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="flip-up"
              data-aos-delay={project.dad}
              data-aos-duration="2000"
            >
              <img src={project.gambar} alt="project" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <p
                      className="px-3 py-1 border border-zinc-500 rounded-md font-semibold bg-zinc-600"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="my-3">
                  <a
                    href="#"
                    className="p-3 rounded-lg text-center bg-violet-500 hover:bg-violet-800 transition-all block border border-zinc-300"
                  >
                    More See <i className="ri-arrow-right-line ri-md"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end Project */}
      {/* contact */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Contact me
        </h1>
        <p
          className="text-base  opacity-50 text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Lets Connect
        </p>
        <form
          action="https://formsubmit.co/rikireza3r@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10  mx-auto w-full lg:w-fit rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap : </label>
              <input
                type="text"
                name="nama"
                placeholder="Input Your Name"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email : </label>
              <input
                type="email"
                name="email"
                placeholder="Input Your Email"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="messege" className="font-semibold">
                Messege :{" "}
              </label>
              <textarea
                name="messege"
                id="messege"
                cols="40"
                rows="7"
                required
                placeholder="Please Give Me Messege"
                className="border border-zinc-500 p-2 rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                name="submit"
                className="p-3 w-full bg-violet-500 hover:bg-violet-700 rounded-lg transition-all border border-zinc-700"
              >
                Send Messege
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
