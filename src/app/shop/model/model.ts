import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticData {
    private products: Product [] = [
        new Product(1, "Xiaomi Traffic Recorder", "DVR", "запись видео 1920×1080", 3450),
        new Product(2, "AdvoCam FD Black", "DVR", "запись видео 1920×1080 при 30 к/с, с экраном 2.7\" 320×240", 4390),
        new Product(3, "Apple Watch Series 3", "smart-watch", "противоударные, влагозащищенные", 22390),
        new Product(4, "Xiaomi Mi Band 2", "smart-watch", "фитнес-браслет влагозащищенный сенсорный OLED-экран, 0.42\"", 1690),
        new Product(5, "JBL Xtreme", "audio", "портативная акустика стерео", 10290),
        new Product(6, "Canon EOS 1300D Kit", "Photo", "любительская зеркальная фотокамера байонет Canon EF/EF-S", 20940),
        new Product(7, "Nikon D5300 Kit", "Photo", "объектив в комплекте, модель уточняйте у продавца матрица 24.78 МП (APS-C)", 32780),
        new Product(8, "Sony PlayStation 4 Pro", "game console", "беспроводной контроллер в комплекте поддержка HD-разрешения и 3D-режима", 25200),
        new Product(9, "Microsoft Xbox One S 500 ГБ", "game console", "поддержка HD-разрешения и 3D-режима поставляется с жестким диском 500 Гб воспроизведение видео", 15930)
    ]

    getProduct(): Observable<Product[]> {
        return Observable.from([this.products])
    }
}
