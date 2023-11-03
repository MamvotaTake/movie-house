
interface ActorProps {
    name?: string;
    age?: number;
    gender?: 'male' | 'female' | 'other'| string;
    imageUrl?: string;
}
export function Actor({name, age, gender, imageUrl}: ActorProps) {
    return (
        <div className='flex items-center gap-2 space-x-1'>
            <img alt="actor" src={imageUrl} className='h-12 w-12 rounded-full border bg-gradient-to-r from-green-500 to-emerald-300 px-1 py-1 from-10% via-sky-950 via-30% to-90%'/>
           <div className='flex flex-col gap-1'>
               <p className='flex text-sm font-bold text-gray-100'>{name}</p>
               <span className='flex flex-col text-sm text-gray-400'>
                <p className='flex text-sm text-gray-400'>Age: {age}</p>
                <p className='flex text-sm text-gray-400'>Gender: {gender}</p>
            </span>
           </div>

        </div>

    );
}
