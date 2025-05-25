export interface ListMenuType {
    name: string;
    url: string;
    hangmoi: Array<string>;
    noibat: Array<string>;
    dmsp: Array<string>;
    phukien: Array<string>;
    image1: string;
    image2: string;
}

export interface MenuItemType {
    name: string;
    url: string;
}
export interface OderType {
    image: string;
    name: string;
    colorImg: string;
    colorName: string;
    size: string;
    number: number;
    percent: string;
    price: number;
    TotalPrice: number;
}