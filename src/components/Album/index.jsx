import React from "react";

export default function Album({ songTitles, albumName}) {
    // const songTitles = [1, 2, 3, 4, 5];
    const listItems = songTitles.map((songTitle) =>
        <li key={songTitle.toString()}>
            {songTitle}
        </li>
    );

    return (
        <>
            <details name="Fuji Kaze" open="false">
                <summary>{albumName}</summary>
                <ol>
                    {listItems}
                </ol>
            </details>
        </>
    )
}