import React, { useState } from 'react';
import './PolicyPage.css';
import LanguageSelector from '../components/LanguageSelector';

const Support = () => {
  const [language, setLanguage] = useState('en');

  return (
    <div className="policy-container" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
      <div className="policy-content">
        {language === 'en' && <EnglishVersion />}
        {language === 'fr' && <FrenchVersion />}
        {language === 'ar' && <ArabicVersion />}
      </div>
    </div>
  );
};

const EnglishVersion = () => (
  <>
    <h1>SUPPORT – Boostify Skills</h1>

    <p><strong>Last Updated:</strong> 02/04/2026</p>

    <hr />

    <h3>How to Contact Support</h3>
    <p>If you need help with your account, app access, learning content, or technical issues, contact us using one of the channels below.</p>

    <ul>
      <li><strong>Support Email:</strong> contact.boostifyskills@gmail.com</li>
      <li><strong>General Email:</strong> contact@juniorscv.com</li>
      <li><strong>Website:</strong> www.juniorscv.com</li>
    </ul>

    <h3>Response Time</h3>
    <p>Our team usually replies within 24 to 72 business hours.</p>

    <h3>What to Include in Your Request</h3>
    <ul>
      <li>Your registered email address</li>
      <li>Your device type and OS version</li>
      <li>App version</li>
      <li>A short description of the issue</li>
      <li>Screenshots (if available)</li>
    </ul>

    <h3>Account and Data Requests</h3>
    <p>For account deletion or personal data requests, contact us at:</p>
    <ul>
      <li>contact.boostifyskills@gmail.com</li>
      <li>contact@juniorscv.com</li>
    </ul>


    <hr />

    <p><strong>Boostify Skills</strong> is published by <strong>Juniors CV</strong>.</p>
  </>
);

const FrenchVersion = () => (
  <>
    <h1>SUPPORT – Boostify Skills</h1>

    <p><strong>Dernière mise à jour :</strong> 02/04/2026</p>

    <hr />

    <h3>Comment Contacter le Support</h3>
    <p>Si vous avez besoin d'aide concernant votre compte, l'accès à l'application, le contenu pédagogique ou un problème technique, contactez-nous via l'un des canaux ci-dessous.</p>

    <ul>
      <li><strong>Email Support :</strong> contact.boostifyskills@gmail.com</li>
      <li><strong>Email Général :</strong> contact@juniorscv.com</li>
      <li><strong>Site web :</strong> www.juniorscv.com</li>
    </ul>

    <h3>Délai de Réponse</h3>
    <p>Notre équipe répond généralement sous 24 à 72 heures ouvrables.</p>

    <h3>Informations à Fournir</h3>
    <ul>
      <li>Votre adresse email d'inscription</li>
      <li>Le type d'appareil et la version du système</li>
      <li>La version de l'application</li>
      <li>Une description courte du problème</li>
      <li>Des captures d'écran (si disponibles)</li>
    </ul>

    <h3>Demandes de Compte et de Données</h3>
    <p>Pour la suppression du compte ou les demandes liées aux données personnelles, contactez-nous :</p>
    <ul>
      <li>contact.boostifyskills@gmail.com</li>
      <li>contact@juniorscv.com</li>
    </ul>


    <hr />

    <p><strong>Boostify Skills</strong> est publié par <strong>Juniors CV</strong>.</p>
  </>
);

const ArabicVersion = () => (
  <>
    <h1>الدعم - Boostify Skills</h1>

    <p><strong>آخر تحديث:</strong> 02/04/2026</p>

    <hr />

    <h3>كيفية التواصل مع الدعم</h3>
    <p>إذا كنت بحاجة إلى مساعدة بخصوص الحساب أو الوصول إلى التطبيق أو المحتوى التعليمي أو أي مشكلة تقنية، يمكنك التواصل معنا عبر القنوات التالية.</p>

    <ul>
      <li><strong>بريد الدعم:</strong> contact.boostifyskills@gmail.com</li>
      <li><strong>البريد العام:</strong> contact@juniorscv.com</li>
      <li><strong>الموقع الإلكتروني:</strong> www.juniorscv.com</li>
    </ul>

    <h3>مدة الرد</h3>
    <p>عادةً ما يرد فريقنا خلال 24 إلى 72 ساعة عمل.</p>

    <h3>المعلومات المطلوبة في طلبك</h3>
    <ul>
      <li>البريد الإلكتروني المسجل</li>
      <li>نوع الجهاز وإصدار النظام</li>
      <li>إصدار التطبيق</li>
      <li>وصف مختصر للمشكلة</li>
      <li>لقطات شاشة (إن توفرت)</li>
    </ul>

    <h3>طلبات الحساب والبيانات</h3>
    <p>لطلب حذف الحساب أو الطلبات المتعلقة بالبيانات الشخصية، تواصل معنا على:</p>
    <ul>
      <li>contact.boostifyskills@gmail.com</li>
      <li>contact@juniorscv.com</li>
    </ul>


    <hr />

    <p><strong>Boostify Skills</strong> منشور بواسطة <strong>Juniors CV</strong>.</p>
  </>
);

export default Support;
