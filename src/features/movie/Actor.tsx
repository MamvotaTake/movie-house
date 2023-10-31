
interface ActorProps {
    name?: string;
    age?: number;
    gender?: 'male' | 'female' | 'other'| string;
    imageUrl?: string;
}
export function Actor({name, age, gender, imageUrl}: ActorProps) {
    return (
        <div className='flex gap-2 items-center space-x-1'>
            <img alt="actor" src={imageUrl} className='w-12 h-12 bg-gradient-to-r from-green-500 from-10% via-sky-950 via-30% to-emerald-300 to-90% py-1 px-1 border rounded-full'/>
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
