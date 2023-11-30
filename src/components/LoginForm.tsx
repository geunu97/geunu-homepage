'use client'

import styles from '../styles/loginForm.module.css'

export default function LoginForm() {
  const onSubmit = () => {
    return
  }

  return (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <input type="text" placeholder="아이디를 입력해주세요." />
      <input type="password" placeholder="비밀번호를 입력해주세요." />
      <button type="submit">로그인</button>
    </form>
  )
}
