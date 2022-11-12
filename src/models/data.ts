import { serverTimestamp } from "firebase/database";
import { StorageError, UploadTask } from "firebase/storage";

export interface SignUpEmail {
    name: string;
    email: string;
    password: string;
}

export interface SignInEmail {
    email: string;
    password: string;
}

export interface Service {
    id?: string;
    uid?: string;
    title: string;
    category: string;
    subcategory: string;
    price: string | number;
    tags: string[];
    description: string;
    images: string[];
    pdfs: string[];
}

export interface ServiceRequest {
    id?: string;
    uid: string;
    date: any;
}

export interface ServiceOrder {
    id?: string;
    uid: string;
    date: any;
    status: number;
    progress?: {
        status: number;
        date: any;
    }[];
    files?: string[];
}

export interface ServiceData {
    id?: string;
    uid?: string;
    post_date: any;
    poster_image: string;
    title: string;
    status: "active" | "draft";
    flag?: string;
    finish?: string[];
    orders?: ServiceRequest[];
    request?: ServiceRequest[];
    viewed?: number;
}

export interface ServiceOwnerRequest {
    id?: string;
    sid: string;
    uid: string;
    date: any;
    status: "waiting" | "rejected";
}

export interface ServiceOwnerOrder {
    id?: string;
    sid: string;
    uid: string;
    heroId?: string;
    date: any;
    status: number;
    files?: string[];
    progress?: {
        status: number;
        date: any;
    }[];
}

export interface ServiceDetail extends Service, ServiceData {
    _?: any;
}

export interface User {
    uid: string;
    name: string;
    profile: string;
    services?: string[];
    chats?: string[];
}

export interface Assignments {
    orders: ServiceOwnerOrder[];
    request: ServiceOwnerRequest[];
    finish: any[];
}

export interface IDs {
    uid: string; // user id
    uid2: string; // other user id
    sid: string; // service id
    hid: string; // hero id
    oid: string; // order id
    rid: string; // request id
    pid: string; // poster id
    biid: string; // bid id
    apcid: string; // aplication id;
    anyid: string; // any other id;
    cid: string; // chat id
    mid: string; // message id
}

export interface Bid extends Pick<IDs, "pid" | "hid" | "uid"> {
    id?: string;
    date: any;
    description: string;
    price: string | number;
    accept: boolean;
    status: number;
    files?: string[];
    progress?: {
        status: number;
        date: any;
    }[];
}

export interface Application extends Pick<IDs, "pid" | "hid" | "uid"> {
    id?: string;
    date: any;
    cv?: string;
    description: string;
    accept: boolean;
    status: number;
    files?: string[];
    progress?: {
        status: number;
        date: any;
    }[];
}

export interface Poster {
    id?: string;
    uid?: string;
    title: string;
    type_of_job: "task" | "hiring";
    company?: string;
    price?: string | number;
    is_fixed_price?: boolean;
    description: string;
    category: string;
    skills: string[];
    number_of_hero?: number;
    bids?: Bid[];
    applications?: Application[];
    status?: "open" | "close";
    date?: any;
    flag?: string;
}

export interface MessageBuble {
    id: string;
    date: any;
    file: any | null;
    typeFile: string | null;
    message: string;
    senderUid: string;
    statusFile: 'uploading' | 'uploaded' | 'failed' | 'none';
    nameFile: string;
}

export interface ChatDoc extends Pick<IDs, 'anyid'> {
    participants: string[];
    anytitle: string;
    last_update: any;
}

export interface ChatInfo extends Pick<IDs, 'uid' | 'cid' | 'anyid'> {
    id?: string;
    anytitle: string;
    last_chat: any;
    last_message: string;
    type: string;
};

export interface TaskProgress extends Pick<IDs, 'mid'> {
    progress: number;
    error: null | any;
    task: UploadTask;
}

export default {};
