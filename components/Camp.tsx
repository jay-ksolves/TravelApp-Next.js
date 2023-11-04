import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
    bImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
}

const CampSite = ({ bImage, title, subtitle, peopleJoined }: CampProps) => {
    const backgroundStyle = {
        backgroundImage: `url(${bImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: '100px',

    };

    return (
        <div className='h-full w-full min-w-[1200px] lg:rounded-r-5xl 2xl:rounded-5xl translate-x-10 ' style={backgroundStyle}>
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flex gap-4">
                    <div className="rounded-full bg-blue-500 p-4">
                        <Image
                            src="/folded-map.svg"
                            alt="map"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-white">{title}</h4>
                        <p className="regular-14 text-white">{subtitle}</p>
                    </div>
                </div>

                <div className="flexCenter gap-6">
                    <span className="flex -space-x-4 overflow-hidden">
                        {PEOPLE_URL.map((url) => (
                            <Image
                                className="inline-block h-10 w-10 rounded-full"
                                src={url}
                                key={url}
                                alt="person"
                                width={52}
                                height={52}
                            />
                        ))}
                    </span>
                    <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
                </div>
            </div>
        </div>
    );
}

const Camp = () => {
    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar flex h-[400px] w-full items-start justify-start gap-8 overflow-x-auto  lg:h-[400px] xl:h-[650px]">
                <CampSite
                    bImage="img-1.png"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    peopleJoined="50+ Joined"
                />
                <CampSite
                    bImage="img-2.png"
                    title="Mountain View Camp"
                    subtitle="Somewhere in the Wilderness"
                    peopleJoined="50+ Joined"
                />
            </div>

            <div className="flex-end mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-700 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        <strong>Feeling Lost</strong> And Not Knowing The Way?
                    </h2>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
                    </p>
                    <Image
                        src="/quote.svg"
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>
        </section>
    );
}

export default Camp;