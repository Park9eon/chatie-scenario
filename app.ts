import * as fs from 'fs';

export interface Chat {
    name: string | null;
    characters: Character[] | null;
    scenes: Scene[] | null;
}

export interface Character {
    id: string | null;
    name: string | null;
    display_name: string | null;
    profile_image: string | null;
    status_message: string | null;
}

export interface Scene {
    id: string | null;
    name: string | null;
    items: SceneItem[] | null;
    sender_ids: string[] | null;
    is_clear: any
}

export interface SceneItem {
    id: string | null;
    character_id?: string | null;
    object_type: string | null;
    object: Object | null;
}

export interface Object {
    name?: string | null;
    text?: string | null;
}

let chat: Chat = {
    "name": "Hello, World!",
    "characters":
        [{
            "id": "0",
            "name": "전지적",
            "display_name": "전지적",
            "profile_image": null,
            "status_message": ""
        }, {
            "id": "4de92e58-52c1-411c-aa81-56243de6f2bc",
            "name": "Foo",
            "display_name": "Foo",
            "profile_image": null,
            "status_message": ""
        }, {
            "id": "b5096781-fb98-49bb-9220-ec6b8d0f1cfa",
            "name": "Bar",
            "display_name": "Bar",
            "profile_image": null,
            "status_message": ""
        }],
    "scenes":
        [{
            "id": "ea9ad0b7-b2f3-492b-936e-34b30a1b4d0f",
            "name": "ChatRoom",
            "items": [{
                "id": "706f4050-9090-42ec-ad69-d66425dfdf5c",
                "character_id": null,
                "object_type": "effect",
                "object": {"name": "CLEAR_CHATS"}
            }, {
                "id": "447bb2bf-246b-4f1a-bba1-2a9a1e9438d7",
                "character_id": "0",
                "object_type": "text",
                "object": {"text": "val foo = Foo()"}
            }, {
                "id": "daeb5405-0c65-4b52-bd30-c1b6a34240a5",
                "character_id": "0",
                "object_type": "text",
                "object": {"text": "foo.say(\"Hello!\")"}
            }, {
                "id": "e0a79d7f-47f6-4ca2-9c91-e11e067b8dc9",
                "character_id": "4de92e58-52c1-411c-aa81-56243de6f2bc",
                "object_type": "text",
                "object": {"text": "No signature of method: Foo.say()"}
            }],
            "sender_ids": ["4de92e58-52c1-411c-aa81-56243de6f2bc", "b5096781-fb98-49bb-9220-ec6b8d0f1cfa"],
            "is_clear": true
        }]
};
// 10만번
for (let i = 1; i <= 100; i++) {
    chat.characters!!.push({
        "id": `${i}`,
        "name": `id가 ${i}인 유저`,
        "display_name": `id가 ${i}인 유저`,
        "profile_image": null,
        "status_message": ""
    });
    chat.scenes!![0].items!!.push({
        id: "" + i,
        "character_id": `${i}`,
        "object_type": "text",
        "object": {"text": `id가 ${i}인 유저가 입장하였습니다.`}
    })

}

fs.writeFile('test.chatie', JSON.stringify(chat), 'utf8', function (e) {
    console.log(e);
});