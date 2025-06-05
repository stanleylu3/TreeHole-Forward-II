// Header.tsx

import React from "react";

interface HeaderProps {
  onAddPost: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddPost }) => {
  return (
    <header className="header">
      <div className="logo-title">
        <h1>ꪊᥴ꠸ ꪻ᥅ꫀꫀꫝꪮꪶꫀ</h1>
        {/* 
        GET FONT FROM https://tools.picsart.com/text/font-generator/
        𝖀𝕮𝕴 𝕿𝖗𝖊𝖊𝕳𝖔𝖑𝖊
        𝓤𝓒𝓘 𝓣𝓻𝓮𝓮𝓗𝓸𝓵𝓮
        ꪊᥴ꠸ ꪻ᥅ꫀꫀꫝꪮꪶꫀ
        𝕌ℂ𝕀 𝕋𝕣𝕖𝕖ℍ𝕠𝕝𝕖
        𝔘ℭℑ 𝔗𝔯𝔢𝔢ℌ𝔬𝔩𝔢
        𝒰𝒞𝐼 𝒯𝓇𝑒𝑒𝐻𝑜𝓁𝑒
        𐌵𐌂𐌉 𐌕𐌓𐌄𐌄𐋅Ꝋ𐌋𐌄
        ͓̽U͓͓̽̽C͓͓̽̽I͓̽ ͓̽T͓͓̽̽r͓͓̽̽e͓͓̽̽e͓͓̽̽H͓͓̽̽o͓͓̽̽l͓͓̽̽e͓̽
         */}
        <div className="nav-buttons">
          <button className="tab active">🌿 New</button>
          <button className="tab">🔥 HOT</button>
        </div>
      </div>
      <input type="text" className="search" placeholder="Search a post..." />
      <button className="add-post" onClick={onAddPost}>
        <img src="/new.svg" alt="Create Post" className="add-post-icon" />
      </button>
    </header>
  );
};

export default Header;
