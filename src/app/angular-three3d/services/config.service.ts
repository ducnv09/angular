import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    private readonly color = signal<string>('#b3478c');
    public readonly selectedColor = this.color.asReadonly();

    setColor(hexColor: string) {
        this.color.set(hexColor);
    }

    constructor() {}
}