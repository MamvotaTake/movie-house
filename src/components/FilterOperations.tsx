import {Filter} from "./Filter.tsx";
import {SortBy} from "./SortBy.tsx";

export function FilterOperations() {
    return (
        <div className='hidden md:flex items-center justify-between gap-6 '>
            <Filter
                filterField="movies"
                options={[
                    { value: "all", label: "All" },
                    { value: "popular", label: "Popular" },
                    { value: "top_rated", label: "Top rated" },
                    { value: "on_the_air", label: "On the air" },
                    { value: "airing_today", label: "Airing today" },
                    { value: "tv", label: "Tv" },
                    { value: "people", label: "People" },
                ]} />
            <SortBy
                options={[
                    { value: "name-asc", label: "Sort by name (A to Z)" },
                    { value: "name-desc", label: "Sort by name (Z to A)" },
                ]}
            />
        </div>
    );
}