class Quarter {
    private value: number = .25;
    get Value(): number {
         return this.value; 
    }
    getImageUrl(): string {
        return "../content/images/Quarter.png";
    }
}