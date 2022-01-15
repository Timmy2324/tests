import React from "react";

const callBack = () => {
    alert('kek')
}

// window.setTimeout(callBack, 1000)


export const User = () => {

    const deleteUser = () => {
        alert('User delete')
    }

    const updateUser = () => {
        alert('User delete')
    }

    const nameChanged = () => {
      alert('lol')
    }

    const onBlur = () => {
      alert('lol2')
    }

    return (
        <div>
            <textarea
                onChange={nameChanged}
                onBlur={onBlur}
            >
                Kek
            </textarea>
            <button onClick={deleteUser}>Удалить</button>
            <button onClick={updateUser}>Обновить</button>
        </div>
    )
}