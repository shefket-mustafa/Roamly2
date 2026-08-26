type Props = {
    value: string;
    description: string;
}

export default function MoreAboutCard({value, description}: Props){

    return(
        <div className="flex flex-col py-10 px-10 bg-gray-100 rounded-4xl">

            <p className="font-bold text-5xl text-black">{value}</p>
            <p className="text-lg text-gray-400">{description}</p>


        </div>
    )
}