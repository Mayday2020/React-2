import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
    return (
            <main className={s.content}>
                <div>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGAO9zvVhyAqQ/company-background_10000/0/1539806088038?e=2159024400&v=beta&t=5vq2-UBGsfB5RPQaOHqFEHtmdq47wFGYL27qOMblKwc" />
                </div>
                <div className={s.description}>Avatar + description</div>
                <div className={s.posts}>My posts</div>
                <div>My wall</div>
            </main>
    )
}
export default Profile;