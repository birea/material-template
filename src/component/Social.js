import React from 'react';
import Social from "@front10/landing-page-book/dist/components/Social";
import "@front10/landing-page-book/dist/components/Social/style.css";

import {
    FacebookLoginButton,
    GoogleLoginButton,
    GithubLoginButton,
    TwitterLoginButton,
    AmazonLoginButton,
    InstagramLoginButton,
    LinkedInLoginButton,
    MicrosoftLoginButton,
    BufferLoginButton,
    TelegramLoginButton,
    AppleLoginButton,
    DiscordLoginButton,
    SlackLoginButton,
    OktaLoginButton,
} from "react-social-login-buttons";

const SocialIcon = () => {
    return (
        <div className="container p-4 m-auto text-center">
            <h3 className="text-xl my-4">Social Icon demo.</h3>
            <Social url="https://front10.com" />
            <Social type="facebook" url="https://front10.com" />
            <Social type="google" url="https://front10.com" />
            <Social type="linkedin" url="https://front10.com" />
            <Social type="livejournal" url="https://front10.com" />
            <Social type="ok" url="https://front10.com" />
            <Social type="pinterest" url="https://front10.com" />
            <Social type="reddit" url="https://front10.com" />
            <Social type="telegram" url="https://front10.com" />
            <Social type="tumblr" url="https://front10.com" />
            <Social type="twitter" url="https://front10.com" />
            <Social type="viber" url="https://front10.com" />
            <Social type="vk" url="https://front10.com" />
            <Social type="whatsapp" url="https://front10.com" />
            <br />
            <h3 className="text-xl my-4">Social Login Button</h3>
            <FacebookLoginButton />
            <GoogleLoginButton />
            <GithubLoginButton />
            <TwitterLoginButton />
            <AmazonLoginButton />
            <InstagramLoginButton />
            <LinkedInLoginButton />
            <MicrosoftLoginButton />
            <BufferLoginButton />
            <TelegramLoginButton />
            <AppleLoginButton />
            <DiscordLoginButton />
            <SlackLoginButton />
            <OktaLoginButton />
        </div>
    );
}
export default SocialIcon;