import apiConfig from "../service/apiConfig.ts";

export function formatDate(dateString: string) {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(dateString));
}

export function formatYear(dateString: string) {
        return dateString.split('-').slice(0,1).join('');
}

export function formatContent(content: string){
    return content.split('-').slice(0,5).join(' ').concat('...');
}

export function getImageUrl(imgPath: string) {
    return apiConfig.w500Image(imgPath);
}

export function formatOverview(overview: string){
    return overview.split('-').slice(0,18).join(' ').concat('...');
}

export function formatRating(rating: number){
    return rating.toFixed(1);
}