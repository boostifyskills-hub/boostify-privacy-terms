import React, { useState } from 'react';
import './PolicyPage.css';
import LanguageSelector from '../components/LanguageSelector';

const PrivacyPolicy = () => {
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
    <h1>PRIVACY POLICY – Boostify Skills</h1>
    
    <p><strong>Last Updated:</strong> 25/01/2026</p>
    <p><strong>Version:</strong> 1.0 Official</p>
    
    <hr />
    
    <h3>Preamble</h3>
    <p><strong>Boostify Skills</strong> is a skills development application (soft skills, employability, upskilling) published by <strong>Juniors CV</strong>.</p>
    <p>This privacy policy explains how we collect, use, protect, and process the personal data of our users.</p>
    <p><strong>By using Boostify Skills, you accept the practices described below.</strong></p>
    
    <hr />
    
    <h3>1. Data Controller</h3>
    <p>The data controller is:</p>
    <p><strong>Juniors CV</strong><br />
    Employability and Skills Development Platform</p>
    <ul>
      <li><strong>Website:</strong> www.juniorscv.com</li>
      <li><strong>Email:</strong> contact@juniorscv.com</li>
      <li><strong>Support:</strong> contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h3>2. Data Collected</h3>
    <p>We collect only the data necessary for the proper functioning of our services.</p>
    
    <h4>a) Personal Data</h4>
    <ul>
      <li>First and last name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Profile photo (optional)</li>
    </ul>
    
    <h4>b) Academic and Professional Data</h4>
    <ul>
      <li>Status (student, graduate, employee, etc.)</li>
      <li>Education level</li>
      <li>Declared experiences and skills</li>
    </ul>
    
    <h4>c) Educational Data</h4>
    <ul>
      <li>Test and quiz results</li>
      <li>Scores and levels</li>
      <li>Certificates, badges, and completed pathways</li>
      <li>Progress history</li>
    </ul>
    
    <h4>d) Technical Data</h4>
    <ul>
      <li>Device type and OS</li>
      <li>IP address</li>
      <li>Connection data and logs</li>
    </ul>
    
    <h3>3. Purpose of Processing</h3>
    <p>Data is used to:</p>
    <ul>
      <li>Create and manage user accounts</li>
      <li>Assess skills and offer personalized pathways</li>
      <li>Generate scores, certificates, and recommendations</li>
      <li>Provide coaching and educational monitoring</li>
      <li>Improve user experience</li>
      <li>Send useful notifications and communications</li>
    </ul>
    
    <h3>4. How We Share Your Information</h3>
    <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
    
    <h4>4.1 With Your Consent</h4>
    <ul>
      <li>Share your application materials with employers when you apply for jobs</li>
      <li>Share certificates when you choose to share them</li>
    </ul>
    
    <h4>4.2 Service Providers</h4>
    <p>We may share information with third-party service providers who perform services on our behalf:</p>
    <ul>
      <li><strong>Cloud Hosting:</strong> Render.com for backend infrastructure</li>
      <li><strong>Database Services:</strong> MongoDB for data storage</li>
      <li><strong>Email Services:</strong> For sending transactional and notification emails</li>
      <li><strong>Authentication Services:</strong> Google OAuth, Facebook Login</li>
    </ul>
    
    <h4>4.3 Legal Requirements</h4>
    <p>We may disclose your information when required by law.</p>
    
    <h4>4.4 Third-Party Authentication</h4>
    <p>When you use Google or Facebook login:</p>
    <ul>
      <li>You are subject to their respective privacy policies</li>
      <li>We only collect information you authorize them to share</li>
      <li>You can revoke access at any time through your third-party account settings</li>
    </ul>
    
    <h3>5. Legal Basis</h3>
    <p>Processing is based on:</p>
    <ul>
      <li>User consent</li>
      <li>Service execution</li>
      <li>Juniors CV's legitimate interest</li>
      <li>Legal obligations</li>
    </ul>
    
    <h3>6. Data Retention</h3>
    <ul>
      <li>Data retained as long as the account is active</li>
      <li>Deletion or anonymization upon request</li>
      <li>Minimum legal retention if required</li>
    </ul>
    
    <h3>7. Security</h3>
    <p>We apply technical and organizational security measures to protect your data against:</p>
    <ul>
      <li>Unauthorized access</li>
      <li>Loss</li>
      <li>Alteration</li>
      <li>Disclosure</li>
    </ul>
    
    <h3>8. User Rights</h3>
    <p>You have the following rights:</p>
    <ul>
      <li><strong>Access</strong> – View your data</li>
      <li><strong>Rectification</strong> – Correct your information</li>
      <li><strong>Deletion</strong> – Request deletion of your data</li>
      <li><strong>Limitation</strong> – Restrict processing</li>
      <li><strong>Objection</strong> – Object to processing</li>
      <li><strong>Portability</strong> – Retrieve your data</li>
      <li><strong>Withdrawal of consent</strong> – Withdraw your consent at any time</li>
    </ul>
    
    <h4>8.1 Account Deletion</h4>
    <p><strong>Delete Your Account:</strong></p>
    <ul>
      <li>From the app: Go to your profile section and use the "Delete Account" feature</li>
      <li>Via web link: <a href="https://juniorcvbackend-mxog.onrender.com" target="_blank" rel="noopener noreferrer">https://juniorcvbackend-mxog.onrender.com</a></li>
      <li>By email: contact@juniorscv.com or contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h3>9. Children's Privacy</h3>
    <p>Our App is not intended for children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.</p>
    
    <h3>10. International Data Transfers</h3>
    <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our App, you consent to the transfer of your information to our facilities and service providers globally.</p>
    
    <h3>11. Changes to This Privacy Policy</h3>
    <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
    <ul>
      <li>Posting the new Privacy Policy in the App</li>
      <li>Updating the "Last Updated" date</li>
      <li>Sending you an email notification (for significant changes)</li>
    </ul>
    <p>Your continued use of the App after changes become effective constitutes acceptance of the revised Privacy Policy.</p>
    
    <hr />
    
    <h3>GDPR Compliance (European Union)</h3>
    <p>For users in the European Economic Area (EEA), we comply with GDPR regulations:</p>
    <ul>
      <li>Right to access, rectification, deletion, restriction, objection, and portability</li>
      <li>Right to withdraw consent at any time</li>
      <li>Right to lodge a complaint with a supervisory authority</li>
      <li>Data transfers outside the EEA are protected by appropriate safeguards</li>
    </ul>
    
    <h3>CCPA Compliance (California)</h3>
    <p>For California residents, we comply with CCPA:</p>
    <ul>
      <li>Right to know what personal information is collected and shared</li>
      <li>Right to delete personal information</li>
      <li>Right to opt-out of sale (we do not sell personal data)</li>
      <li>Right to non-discrimination for exercising privacy rights</li>
    </ul>
    
    <hr />
    
    <p><strong>Document Version:</strong> 1.0 Official<br />
    <strong>Last Updated:</strong> 25/01/2026<br />
    <strong>Effective Date:</strong> 25/01/2026<br />
    <strong>Document ID:</strong> BS-PP-2026-001</p>
    
    <h3>Contact</h3>
    <p><strong>Email:</strong><br />
    contact@juniorscv.com<br />
    contact.boostifyskills@gmail.com</p>
    <p><strong>Website:</strong> www.juniorscv.com</p>
  </>
);

const FrenchVersion = () => (
  <>
    <h1>POLITIQUE DE CONFIDENTIALITÉ – Boostify Skills</h1>
    
    <p><strong>Dernière mise à jour:</strong> 25/01/2026</p>
    <p><strong>Version:</strong> 1.0 Officielle</p>
    
    <hr />
    
    <h3>Préambule</h3>
    <p><strong>Boostify Skills</strong> est une application de développement des compétences (soft skills, employabilité, upskilling) éditée par <strong>Juniors CV</strong>.</p>
    <p>La présente politique de confidentialité explique comment nous collectons, utilisons, protégeons et traitons les données personnelles de nos utilisateurs.</p>
    <p><strong>En utilisant Boostify Skills, vous acceptez les pratiques décrites ci-dessous.</strong></p>
    
    <hr />
    
    <h3>1. Responsable du traitement</h3>
    <p>Le responsable du traitement des données personnelles est :</p>
    <p><strong>Juniors CV</strong><br />
    Plateforme d'employabilité et de développement des compétences</p>
    <ul>
      <li><strong>Site web:</strong> www.juniorscv.com</li>
      <li><strong>Email:</strong> contact@juniorscv.com</li>
      <li><strong>Support:</strong> contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h3>2. Données collectées</h3>
    <p>Nous collectons uniquement les données nécessaires au bon fonctionnement des services.</p>
    
    <h4>a) Données personnelles</h4>
    <ul>
      <li>Nom et prénom</li>
      <li>Adresse e-mail</li>
      <li>Numéro de téléphone</li>
      <li>Photo de profil (facultative)</li>
    </ul>
    
    <h4>b) Données académiques et professionnelles</h4>
    <ul>
      <li>Statut (étudiant, diplômé, salarié, etc.)</li>
      <li>Niveau d'études</li>
      <li>Expériences et compétences déclarées</li>
    </ul>
    
    <h4>c) Données pédagogiques</h4>
    <ul>
      <li>Résultats de tests et quiz</li>
      <li>Scores et niveaux</li>
      <li>Certificats, badges et parcours suivis</li>
      <li>Historique de progression</li>
    </ul>
    
    <h4>d) Données techniques</h4>
    <ul>
      <li>Type d'appareil et OS</li>
      <li>Adresse IP</li>
      <li>Données de connexion et logs</li>
    </ul>
    
    <h3>3. Finalités du traitement</h3>
    <p>Les données sont utilisées pour :</p>
    <ul>
      <li>Créer et gérer les comptes utilisateurs</li>
      <li>Évaluer les compétences et proposer des parcours personnalisés</li>
      <li>Générer des scores, certificats et recommandations</li>
      <li>Assurer le coaching et le suivi pédagogique</li>
      <li>Améliorer l'expérience utilisateur</li>
      <li>Envoyer des notifications et communications utiles</li>
    </ul>
    
    <h3>4. Partage des informations</h3>
    <p>Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations dans les cas suivants :</p>
    
    <h4>4.1 Avec votre consentement</h4>
    <ul>
      <li>Partage de vos candidatures avec les employeurs lorsque vous postulez</li>
      <li>Partage de certificats lorsque vous choisissez de les partager</li>
    </ul>
    
    <h4>4.2 Prestataires de services</h4>
    <p>Nous pouvons partager des informations avec des prestataires tiers :</p>
    <ul>
      <li><strong>Hébergement cloud:</strong> Render.com pour l'infrastructure backend</li>
      <li><strong>Services de base de données:</strong> MongoDB pour le stockage des données</li>
      <li><strong>Services d'email:</strong> Pour l'envoi d'emails transactionnels et de notifications</li>
      <li><strong>Services d'authentification:</strong> Google OAuth, Facebook Login</li>
    </ul>
    
    <h4>4.3 Exigences légales</h4>
    <p>Nous pouvons divulguer vos informations lorsque la loi l'exige.</p>
    
    <h4>4.4 Authentification tierce</h4>
    <p>Lorsque vous utilisez la connexion Google ou Facebook :</p>
    <ul>
      <li>Vous êtes soumis à leurs politiques de confidentialité respectives</li>
      <li>Nous collectons uniquement les informations que vous autorisez à partager</li>
      <li>Vous pouvez révoquer l'accès à tout moment via les paramètres de votre compte tiers</li>
    </ul>
    
    <h3>5. Base légale</h3>
    <p>Le traitement repose sur :</p>
    <ul>
      <li>Le consentement de l'utilisateur</li>
      <li>L'exécution du service</li>
      <li>L'intérêt légitime de Juniors CV</li>
      <li>Les obligations légales</li>
    </ul>
    
    <h3>6. Durée de conservation</h3>
    <ul>
      <li>Données conservées tant que le compte est actif</li>
      <li>Suppression ou anonymisation sur demande</li>
      <li>Conservation légale minimale si exigée</li>
    </ul>
    
    <h3>7. Sécurité</h3>
    <p>Nous appliquons des mesures de sécurité techniques et organisationnelles pour protéger vos données contre :</p>
    <ul>
      <li>L'accès non autorisé</li>
      <li>La perte</li>
      <li>L'altération</li>
      <li>La divulgation</li>
    </ul>
    
    <h3>8. Droits des utilisateurs</h3>
    <p>Vous disposez des droits suivants :</p>
    <ul>
      <li><strong>Accès</strong> – Consulter vos données</li>
      <li><strong>Rectification</strong> – Corriger vos informations</li>
      <li><strong>Suppression</strong> – Demander l'effacement de vos données</li>
      <li><strong>Limitation</strong> – Restreindre le traitement</li>
      <li><strong>Opposition</strong> – Vous opposer au traitement</li>
      <li><strong>Portabilité</strong> – Récupérer vos données</li>
      <li><strong>Retrait du consentement</strong> – Retirer votre accord à tout moment</li>
    </ul>
    
    <h4>8.1 Suppression de compte</h4>
    <p><strong>Supprimer votre compte :</strong></p>
    <ul>
      <li>Depuis l'application : Accédez à votre section profil et utilisez la fonctionnalité « Supprimer le compte »</li>
      <li>Via le lien web : <a href="https://juniorcvbackend-mxog.onrender.com" target="_blank" rel="noopener noreferrer">https://juniorcvbackend-mxog.onrender.com</a></li>
      <li>Par email : contact@juniorscv.com ou contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h3>9. Confidentialité des enfants</h3>
    <p>Notre application n'est pas destinée aux enfants de moins de 13 ans (ou l'âge du consentement numérique applicable dans votre juridiction). Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si nous apprenons que nous avons collecté des informations auprès d'un enfant sans le consentement parental, nous prendrons des mesures pour supprimer ces informations.</p>
    
    <h3>10. Transferts internationaux de données</h3>
    <p>Vos informations peuvent être transférées et traitées dans des pays autres que votre pays de résidence. Ces pays peuvent avoir des lois différentes en matière de protection des données. En utilisant notre application, vous consentez au transfert de vos informations vers nos installations et prestataires de services dans le monde entier.</p>
    
    <h3>11. Modifications de cette politique de confidentialité</h3>
    <p>Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Nous vous informerons de tout changement important par :</p>
    <ul>
      <li>Publication de la nouvelle politique de confidentialité dans l'application</li>
      <li>Mise à jour de la date « Dernière mise à jour »</li>
      <li>Envoi d'une notification par email (pour les changements significatifs)</li>
    </ul>
    <p>Votre utilisation continue de l'application après l'entrée en vigueur des modifications constitue une acceptation de la politique de confidentialité révisée.</p>
    
    <hr />
    
    <h3>Conformité RGPD (Union Européenne)</h3>
    <p>Pour les utilisateurs de l'Espace économique européen (EEE), nous respectons les réglementations RGPD :</p>
    <ul>
      <li>Droit d'accès, de rectification, de suppression, de limitation, d'opposition et de portabilité</li>
      <li>Droit de retirer le consentement à tout moment</li>
      <li>Droit de déposer une plainte auprès d'une autorité de contrôle</li>
      <li>Les transferts de données en dehors de l'EEE sont protégés par des garanties appropriées</li>
    </ul>
    
    <h3>Conformité CCPA (Californie)</h3>
    <p>Pour les résidents de Californie, nous respectons la CCPA :</p>
    <ul>
      <li>Droit de savoir quelles informations personnelles sont collectées et partagées</li>
      <li>Droit de supprimer les informations personnelles</li>
      <li>Droit de refuser la vente (nous ne vendons pas de données personnelles)</li>
      <li>Droit à la non-discrimination pour l'exercice des droits à la vie privée</li>
    </ul>
    
    <hr />
    
    <p><strong>Version du document:</strong> 1.0 Officielle<br />
    <strong>Dernière mise à jour:</strong> 25/01/2026<br />
    <strong>Date d'effet:</strong> 25/01/2026<br />
    <strong>ID du document:</strong> BS-PP-2026-001</p>
    
    <h3>Contact</h3>
    <p><strong>Email:</strong><br />
    contact@juniorscv.com<br />
    contact.boostifyskills@gmail.com</p>
    <p><strong>Site web:</strong> www.juniorscv.com</p>
  </>
);

const ArabicVersion = () => (
  <>
    <h1>سياسة الخصوصية – Boostify Skills</h1>
    
    <p><strong>آخر تحديث:</strong> 25/01/2026</p>
    <p><strong>الإصدار:</strong> 1.0 رسمي</p>
    
    <hr />
    
    <h3>تمهيد</h3>
    <p><strong>Boostify Skills</strong> هو تطبيق لتطوير المهارات (المهارات الناعمة، القابلية للتوظيف، تحسين المهارات) من إصدار <strong>Juniors CV</strong>.</p>
    <p>توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية ومعالجة البيانات الشخصية لمستخدمينا.</p>
    <p><strong>باستخدام Boostify Skills، فإنك توافق على الممارسات الموضحة أدناه.</strong></p>
    
    <hr />
    
    <h3>1. المسؤول عن معالجة البيانات</h3>
    <p>المسؤول عن معالجة البيانات الشخصية هو:</p>
    <p><strong>Juniors CV</strong><br />
    منصة التوظيف وتطوير المهارات</p>
    <ul>
      <li><strong>الموقع الإلكتروني:</strong> www.juniorscv.com</li>
      <li><strong>البريد الإلكتروني:</strong> contact@juniorscv.com</li>
      <li><strong>الدعم:</strong> contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h3>2. البيانات المجمعة</h3>
    <p>نجمع فقط البيانات اللازمة للتشغيل السليم لخدماتنا.</p>
    
    <h4>أ) البيانات الشخصية</h4>
    <ul>
      <li>الاسم الأول والأخير</li>
      <li>عنوان البريد الإلكتروني</li>
      <li>رقم الهاتف</li>
      <li>صورة الملف الشخصي (اختيارية)</li>
    </ul>
    
    <h4>ب) البيانات الأكاديمية والمهنية</h4>
    <ul>
      <li>الحالة (طالب، خريج، موظف، إلخ.)</li>
      <li>المستوى التعليمي</li>
      <li>الخبرات والمهارات المعلنة</li>
    </ul>
    
    <h4>ج) البيانات التعليمية</h4>
    <ul>
      <li>نتائج الاختبارات والمسابقات</li>
      <li>الدرجات والمستويات</li>
      <li>الشهادات والشارات والمسارات المكتملة</li>
      <li>سجل التقدم</li>
    </ul>
    
    <h4>د) البيانات التقنية</h4>
    <ul>
      <li>نوع الجهاز ونظام التشغيل</li>
      <li>عنوان IP</li>
      <li>بيانات الاتصال والسجلات</li>
    </ul>
    
    <h3>3. الغرض من المعالجة</h3>
    <p>تستخدم البيانات من أجل:</p>
    <ul>
      <li>إنشاء وإدارة حسابات المستخدمين</li>
      <li>تقييم المهارات وتقديم مسارات مخصصة</li>
      <li>إنشاء الدرجات والشهادات والتوصيات</li>
      <li>توفير التدريب والمتابعة التعليمية</li>
      <li>تحسين تجربة المستخدم</li>
      <li>إرسال الإشعارات والاتصالات المفيدة</li>
      <li>الامتثال للالتزامات القانونية</li>
    </ul>
    
    <h3>4. كيفية مشاركة معلوماتك</h3>
    <p>نحن لا نبيع معلوماتك الشخصية. قد نشارك معلوماتك في الحالات التالية:</p>
    
    <h4>4.1 بموافقتك</h4>
    <ul>
      <li>مشاركة مواد طلبك مع أصحاب العمل عندما تتقدم لوظائف</li>
      <li>مشاركة الشهادات عندما تختار مشاركتها</li>
    </ul>
    
    <h4>4.2 مقدمو الخدمات</h4>
    <p>قد نشارك المعلومات مع مقدمي خدمات خارجيين:</p>
    <ul>
      <li><strong>الاستضافة السحابية:</strong> Render.com للبنية التحتية الخلفية</li>
      <li><strong>خدمات قاعدة البيانات:</strong> MongoDB لتخزين البيانات</li>
      <li><strong>خدمات البريد الإلكتروني:</strong> لإرسال رسائل البريد الإلكتروني والإشعارات</li>
      <li><strong>خدمات المصادقة:</strong> Google OAuth، Facebook Login</li>
    </ul>
    
    <h4>4.3 المتطلبات القانونية</h4>
    <p>قد نكشف عن معلوماتك عندما يتطلب القانون ذلك.</p>
    
    <h4>4.4 المصادقة من طرف ثالث</h4>
    <p>عندما تستخدم تسجيل الدخول عبر Google أو Facebook:</p>
    <ul>
      <li>أنت خاضع لسياسات الخصوصية الخاصة بهم</li>
      <li>نجمع فقط المعلومات التي تأذن بمشاركتها</li>
      <li>يمكنك إلغاء الوصول في أي وقت من خلال إعدادات حسابك الخارجي</li>
    </ul>
    
    <h3>5. الأساس القانوني</h3>
    <p>تعتمد المعالجة على:</p>
    <ul>
      <li>موافقة المستخدم</li>
      <li>تنفيذ الخدمة</li>
      <li>المصلحة المشروعة لـ Juniors CV</li>
      <li>الالتزامات القانونية</li>
    </ul>
    
    <h3>6. مدة الاحتفاظ بالبيانات</h3>
    <ul>
      <li>الاحتفاظ بالبيانات طالما أن الحساب نشط</li>
      <li>الحذف أو إخفاء الهوية عند الطلب</li>
      <li>الحد الأدنى من الاحتفاظ القانوني إذا لزم الأمر</li>
    </ul>
    
    <h3>7. الأمان</h3>
    <p>نطبق تدابير أمنية تقنية وتنظيمية لحماية بياناتك من:</p>
    <ul>
      <li>الوصول غير المصرح به</li>
      <li>الفقدان</li>
      <li>التعديل</li>
      <li>الإفصاح</li>
    </ul>
    
    <h3>8. حقوق المستخدمين</h3>
    <p>لديك الحقوق التالية:</p>
    <ul>
      <li><strong>الوصول</strong> – عرض بياناتك</li>
      <li><strong>التصحيح</strong> – تصحيح معلوماتك</li>
      <li><strong>الحذف</strong> – طلب حذف بياناتك</li>
      <li><strong>التقييد</strong> – تقييد المعالجة</li>
      <li><strong>الاعتراض</strong> – الاعتراض على المعالجة</li>
      <li><strong>قابلية النقل</strong> – استرداد بياناتك</li>
      <li><strong>سحب الموافقة</strong> – سحب موافقتك في أي وقت</li>
    </ul>
    
    <h4>8.1 حذف الحساب</h4>
    <p><strong>احذف حسابك:</strong></p>
    <ul>
      <li>من التطبيق: انتقل إلى قسم الملف الشخصي واستخدم ميزة "حذف الحساب"</li>
      <li>عبر رابط الويب: <a href="https://juniorcvbackend-mxog.onrender.com" target="_blank" rel="noopener noreferrer">https://juniorcvbackend-mxog.onrender.com</a></li>
      <li>عبر البريد الإلكتروني: contact@juniorscv.com أو contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h3>9. خصوصية الأطفال</h3>
    <p>تطبيقنا غير مخصص للأطفال دون سن 13 عامًا (أو سن الموافقة الرقمية المعمول به في بلدك). لا نجمع عن قصد معلومات شخصية من الأطفال. إذا علمنا أننا جمعنا معلومات من طفل دون موافقة الوالدين، فسنتخذ خطوات لحذف تلك المعلومات.</p>
    
    <h3>10. عمليات نقل البيانات الدولية</h3>
    <p>قد يتم نقل معلوماتك ومعالجتها في بلدان غير بلد إقامتك. قد يكون لهذه البلدان قوانين مختلفة لحماية البيانات. باستخدام تطبيقنا، فإنك توافق على نقل معلوماتك إلى منشآتنا ومقدمي الخدمات في جميع أنحاء العالم.</p>
    
    <h3>11. التغييرات على سياسة الخصوصية هذه</h3>
    <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية من خلال:</p>
    <ul>
      <li>نشر سياسة الخصوصية الجديدة في التطبيق</li>
      <li>تحديث تاريخ "آخر تحديث"</li>
      <li>إرسال إشعار عبر البريد الإلكتروني (للتغييرات الهامة)</li>
    </ul>
    <p>استمرارك في استخدام التطبيق بعد دخول التغييرات حيز التنفيذ يشكل قبولاً لسياسة الخصوصية المعدلة.</p>
    
    <hr />
    
    <h3>الامتثال للائحة العامة لحماية البيانات (الاتحاد الأوروبي)</h3>
    <p>بالنسبة للمستخدمين في المنطقة الاقتصادية الأوروبية، نمتثل للائحة العامة لحماية البيانات:</p>
    <ul>
      <li>الحق في الوصول والتصحيح والحذف والتقييد والاعتراض وقابلية النقل</li>
      <li>الحق في سحب الموافقة في أي وقت</li>
      <li>الحق في تقديم شكوى إلى سلطة إشرافية</li>
      <li>عمليات نقل البيانات خارج المنطقة الاقتصادية الأوروبية محمية بضمانات مناسبة</li>
    </ul>
    
    <h3>الامتثال لقانون خصوصية المستهلك في كاليفورنيا</h3>
    <p>بالنسبة لسكان كاليفورنيا، نمتثل لقانون خصوصية المستهلك:</p>
    <ul>
      <li>الحق في معرفة المعلومات الشخصية التي يتم جمعها ومشاركتها</li>
      <li>الحق في حذف المعلومات الشخصية</li>
      <li>الحق في رفض البيع (نحن لا نبيع البيانات الشخصية)</li>
      <li>الحق في عدم التمييز لممارسة حقوق الخصوصية</li>
    </ul>
    
    <hr />
    
    <p><strong>إصدار الوثيقة:</strong> 1.0 رسمي<br />
    <strong>آخر تحديث:</strong> 25/01/2026<br />
    <strong>تاريخ السريان:</strong> 25/01/2026<br />
    <strong>معرف الوثيقة:</strong> BS-PP-2026-001</p>
    
    <h3>اتصل بنا</h3>
    <p><strong>البريد الإلكتروني:</strong><br />
    contact@juniorscv.com<br />
    contact.boostifyskills@gmail.com</p>
    <p><strong>الموقع الإلكتروني:</strong> www.juniorscv.com</p>
  </>
);

export default PrivacyPolicy;

