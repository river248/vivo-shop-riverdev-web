import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from 'react-router-dom'

import styles from './Account.module.scss'
import Input from '~/components/Input'
import Button from '~/components/Button'

const cx = classNames.bind(styles)
function Account() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [nameErr, setNameErr] = useState('')
    const [phoneErr, setPhoneErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [confirmPasswordErr, setConfirmPasswordErr] = useState('')

    const location = useLocation()
    const err = 'Vui lòng không bỏ trống!'

    const handleFocus = (inp) => {
        switch (inp) {
            case 'name':
                setNameErr('')
                break
            case 'phone':
                setPhoneErr('')
                break
            case 'password':
                setPasswordErr('')
                break
            case 'confirm':
                setConfirmPasswordErr('')
                break
            default:
                break
        }
    }

    const handleBlur = (inp) => {
        switch (inp) {
            case 'name':
                setNameErr(err)
                break
            case 'phone':
                setPhoneErr(err)
                break
            case 'password':
                setPasswordErr(err)
                break
            case 'confirm':
                setConfirmPasswordErr(err)
                break
            default:
                break
        }
    }

    const handleResetValue = () => {
        setName('')
        setPassword('')
        setPhone('')
        setConfirmPassword('')
        setNameErr('')
        setPasswordErr('')
        setPhoneErr('')
        setConfirmPasswordErr('')
    }

    // Login or Sign up account
    const handleSubmit = () => {
        if (location.pathname === '/login') {
            if (phone && password) handleResetValue()
        } else if (location.pathname === '/signup') {
            if (name && phone && password && confirmPassword) handleResetValue()
        }
    }
    return (
        <div className={cx('wrapper')}>
            <div className={location.pathname === '/login' ? cx('login-container') : cx('container')}>
                <div className={cx('box')}>
                    <h1>{location.pathname === '/login' ? 'Đăng nhập' : 'Đăng ký'}</h1>
                    <form onSubmit={(e) => e.preventDefault} className={cx('account-form')}>
                        {location.pathname === '/signup' && (
                            <div className={cx('form-group')}>
                                <Input
                                    value={name}
                                    className={cx('account-input')}
                                    placeholder="Tên"
                                    size="xl-size"
                                    shadow="inner"
                                    onFocus={() => handleFocus('name')}
                                    onBlur={() => handleBlur('name')}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {nameErr && <span>{nameErr}</span>}
                            </div>
                        )}
                        <div className={cx('form-group')}>
                            <Input
                                value={phone}
                                className={cx('account-input')}
                                placeholder="Số điện thoại"
                                type="number"
                                size="xl-size"
                                shadow="inner"
                                onFocus={() => handleFocus('phone')}
                                onBlur={() => handleBlur('phone')}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {phoneErr && <span>{phoneErr}</span>}
                        </div>
                        <div className={cx('form-group')}>
                            <Input
                                value={password}
                                className={cx('account-input')}
                                type="password"
                                placeholder="Mật khẩu"
                                size="xl-size"
                                shadow="inner"
                                onFocus={() => handleFocus('password')}
                                onBlur={() => handleBlur('password')}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordErr && <span>{passwordErr}</span>}
                        </div>
                        {location.pathname === '/signup' && (
                            <div className={cx('form-group')}>
                                <Input
                                    value={confirmPassword}
                                    className={cx('account-input')}
                                    type="password"
                                    placeholder="Xác nhận mật khẩu"
                                    size="xl-size"
                                    shadow="inner"
                                    onFocus={() => handleFocus('confirm')}
                                    onBlur={() => handleBlur('confirm')}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {confirmPasswordErr && <span>{confirmPasswordErr}</span>}
                            </div>
                        )}
                    </form>
                    <Button primary className={cx('account-btn')} disabled={loading} onClick={handleSubmit}>
                        {location.pathname === '/login' ? 'Đăng nhập' : 'Đăng ký'}
                    </Button>
                    <div className={cx('other-login')}>
                        <span className={cx('title-or')}>OR</span>
                        <Button
                            primary
                            className={cx('account-btn', 'facebook')}
                            leftIcon={<FontAwesomeIcon icon={faFacebook} />}
                        >
                            Tiếp tục với Facebook
                        </Button>
                        <Button
                            primary
                            className={cx('account-btn', 'google')}
                            leftIcon={<FontAwesomeIcon icon={faGoogle} />}
                        >
                            Tiếp tục với Google
                        </Button>
                    </div>

                    {location.pathname === '/login' && (
                        <Button text className={cx('account-btn', 'account-txt-btn')}>
                            Quên mật khẩu?
                        </Button>
                    )}
                    <Button
                        onClick={handleResetValue}
                        to={location.pathname === '/login' ? '/signup' : '/login'}
                        className={cx('account-btn', 'account-txt-btn')}
                    >
                        {location.pathname === '/login'
                            ? 'Bạn chưa có tài khoản? Đăng ký ngay!'
                            : 'Bạn đã có tài khoản? Đăng nhập ngay!'}
                    </Button>
                    <Button to={'/'} className={cx('account-btn', 'account-txt-btn')}>
                        Về trang chủ
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Account
