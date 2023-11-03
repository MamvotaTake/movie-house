import {Banner} from "./Banner.tsx";
import {Actor} from "../features/movie/Actor.tsx";

const actors = [
    {
        name: 'Tom Hanks',
        age: 65,
        gender: 'male',
        imageUrl: 'https://media.npr.org/assets/img/2021/06/11/tom-hanks-29d69e8c39cd01d67c1a36d0a81674923d18577f.jpg'
    },
    {
        name: 'Meryl Streep',
        age: 72,
        gender: 'female',
        imageUrl: 'https://media.allure.com/photos/62b4b7f0e0cb6a4db04b319d/1:1/w_2000,h_2000,c_limit/6-23%20meryl%20streep.jpg'
    },
    {
        name: 'Leonardo DiCaprio',
        age: 46,
        gender: 'male',
        imageUrl: 'https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg'
    },
    {
        name: 'Scarlett Johansson',
        age: 36,
        gender: 'female',
        imageUrl: 'https://www.shefinds.com/files/2023/08/Scarlett-Johansson-Premiere-Of-Illuminations-Sing-2.jpg'
    },
    {
        name: 'Denzel Washington',
        age: 66,
        gender: 'male',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-645661872.jpg'
    },
    {
        name: 'Jennifer Lawrence',
        age: 30,
        gender: 'female',
        imageUrl: 'data:image/jpeg;base64,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'
    }
];

function Home() {
    return (
        <div className='px-6 py-6 text-white'>
            <Banner/>
            {actors.length !== 0 &&
                <div className='flex flex-col px-6 py-6'>
                    <p className='mb-6 text-2xl font-bold text-gray-200'>Top Cast</p>

                    <div className='flex justify-between gap-5'>

                        {actors.map(actor => (
                            <Actor
                                key={actor.name}
                                name={actor.name}
                                age={actor.age}
                                gender={actor.gender}
                                imageUrl={actor.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;