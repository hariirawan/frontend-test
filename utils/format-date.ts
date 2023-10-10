export const formatDate =(date:string)=> {
    const originalDate = new Date(date);
    const year = originalDate.getUTCFullYear();
    const month = String(originalDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(originalDate.getUTCDate()).padStart(2, "0");
    
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}