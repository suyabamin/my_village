import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        © ২০২৫ আলমদীপাড়া ডিজিটাল গ্রাম। সর্বস্বত্ব সংরক্ষিত।
      </div>
      <div className="footer-links">
        <Link to="/emergency">জরুরি যোগাযোগ</Link>
        <Link to="/agriculture">কৃষি ও সেবা</Link>
        <Link to="/sports">খেলাধুলা</Link>
        <span className="footer-heart-msg">
          <Heart size={13} color="#e74c3c" fill="#e74c3c" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
          আলমদীপাড়া গ্রামবাসীর জন্য
        </span>
      </div>
    </footer>
  );
};
