import Image from "next/image";
import Link from "next/link";

const ClientBox = ({ data }) => {
    const { id, title, image, urlDemo, urlGithub } = data;

    return (
        <div
            key={id}
            className="relative p-5 rounded-3xl shadow-2xl overflow-hidden bg-white transform transition-all duration-500 ease-in-out"
            style={{
                transform: "perspective(1200px) rotateY(0deg) scale(1)", 
                transition: "transform 0.5s ease-in-out",
            }}
        >
            <Image
                src={image}
                alt={title}
                width={500}
                height={600}
                className="w-auto h-96 object-cover object-center rounded-xl"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-xl"></div>

            <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm">Experiencia con este cliente</p>
                <div className="mt-4 flex gap-3">
                    <Link
                        href={urlGithub}
                        target="_blank"
                        className="px-4 py-2 bg-white text-black text-sm font-bold rounded-md hover:bg-gray-200 transition"
                    >
                        Github
                    </Link>
                    <Link
                        href={urlDemo}
                        target="_blank"
                        className="px-4 py-2 bg-secondary text-white text-sm font-bold rounded-md hover:bg-secondary/80 transition"
                    >
                        Live demo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClientBox;
