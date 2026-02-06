import React, { useState } from 'react';
import './PolicyPage.css';
import LanguageSelector from '../components/LanguageSelector';

const TermsOfService = () => {
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
    <h1>TERMS OF SERVICE – Boostify Skills</h1>
    
    <p><strong>Last Updated:</strong> 25/01/2026</p>
    <p><strong>Version:</strong> 1.0 Official</p>
    
    <hr />
    
    <h3>Preamble</h3>
    <p>These Terms of Service (ToS) govern the access and use of the <strong>Boostify Skills</strong> mobile application, published by <strong>Juniors CV</strong>.</p>
    <p>By downloading, installing, or using the application, you unconditionally accept these ToS.</p>
    
    <hr />
    
    <h3>Article 1 – Service Description</h3>
    <p><strong>Boostify Skills</strong> is a skills development platform offering:</p>
    <ul>
      <li>Personality and orientation tests (7P, VARK, personality)</li>
      <li>Personalized upskilling pathways</li>
      <li>Quizzes and challenges to validate skills</li>
      <li>Certificates and achievement badges</li>
      <li>Job recommendations and coaching</li>
      <li>Progress tracking and analytics</li>
    </ul>
    
    <h3>Article 2 – Service Access</h3>
    
    <h4>2.1 Access Conditions</h4>
    <ul>
      <li>Be at least 13 years old (or legal age in your country)</li>
      <li>Create an account with accurate information</li>
      <li>Have an Internet connection and compatible device</li>
    </ul>
    
    <h4>2.2 Registration</h4>
    <p>The user agrees to provide true, accurate, and up-to-date information.<br />
    Any false declaration may result in account suspension or termination.</p>
    
    <h4>2.3 Account Security</h4>
    <p>The user is responsible for the confidentiality of their credentials.<br />
    Any fraudulent use must be reported immediately to:<br />
    contact@juniorscv.com</p>
    
    <h3>Article 3 – Use of Service</h3>
    
    <h4>3.1 Authorized Use</h4>
    <p>The user agrees to use Boostify Skills fairly and in compliance with applicable laws.</p>
    
    <h4>3.2 Prohibited Uses</h4>
    <p>It is strictly forbidden to:</p>
    <ul>
      <li>Share your account with third parties</li>
      <li>Use scripts, bots, or automated tools</li>
      <li>Attempt to bypass security measures</li>
      <li>Distribute illegal, offensive, or inappropriate content</li>
      <li>Copy, reproduce, or distribute content without authorization</li>
    </ul>
    
    <h3>Article 4 – Intellectual Property</h3>
    
    <h4>4.1 Rights of Juniors CV</h4>
    <p>All application content (texts, images, logos, tests, quizzes, videos, design) is the exclusive property of <strong>Juniors CV</strong> or its partners.</p>
    <p>Any unauthorized reproduction, distribution, or use is prohibited.</p>
    
    <h4>4.2 Usage License</h4>
    <p>Juniors CV grants you a personal, non-exclusive, non-transferable, and revocable license to use the application.</p>
    
    <h4>4.3 User Content</h4>
    <p>By posting content (CV, portfolio, comments), you grant Juniors CV a worldwide, free, and non-exclusive license to use, display, and promote this content as part of the service.</p>
    
    <h3>Article 5 – Certifications and Results</h3>
    
    <h4>5.1 Certificate Validity</h4>
    <p>Issued certificates attest to the successful completion of courses or quizzes within the application.</p>
    <p>They do not have official academic value but can be shared on professional networks.</p>
    
    <h4>5.2 Authenticity</h4>
    <p>Results must be obtained honestly.<br />
    Any fraud results in certificate revocation and account suspension.</p>
    
    <h3>Article 6 – Personal Data</h3>
    <p>The processing of personal data is governed by our <strong>Privacy Policy</strong>.</p>
    <p>By using Boostify Skills, you accept the collection and processing of your data in accordance with this policy.</p>
    
    <h3>Article 7 – Liability</h3>
    
    <h4>7.1 Service Availability</h4>
    <p>Juniors CV strives to ensure application availability 24/7.</p>
    <p>However, Juniors CV cannot guarantee total availability and disclaims any liability in case of technical interruption.</p>
    
    <h4>7.2 Limitation of Liability</h4>
    <p>Juniors CV cannot be held responsible for:</p>
    <ul>
      <li>Direct or indirect damages related to service use</li>
      <li>Loss of data or content</li>
      <li>Decisions made based on recommendations or results provided</li>
      <li>Interactions with third parties (employers, partners)</li>
    </ul>
    
    <h4>7.3 User Content</h4>
    <p>Juniors CV is not responsible for content published by users and reserves the right to moderate or delete it.</p>
    
    <h3>Article 8 – Service Modification and Suspension</h3>
    
    <h4>8.1 Modifications</h4>
    <p>Juniors CV reserves the right to modify, suspend, or discontinue all or part of the service at any time, without notice.</p>
    
    <h4>8.2 Account Suspension</h4>
    <p>Juniors CV may suspend or terminate an account in case of:</p>
    <ul>
      <li>Violation of these ToS</li>
      <li>Fraudulent or abusive behavior</li>
      <li>Non-compliance with applicable laws</li>
    </ul>
    
    <h3>Article 9 – Termination and Account Deletion</h3>
    
    <h4>9.1 By User</h4>
    <p><strong>Delete Your Account:</strong></p>
    <ul>
      <li>From the app: Go to your profile section and use the "Delete Account" feature</li>
      <li>Via web link: <a href="https://juniorcvbackend-mxog.onrender.com" target="_blank" rel="noopener noreferrer">https://juniorcvbackend-mxog.onrender.com</a></li>
      <li>By email: contact@juniorscv.com or contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h4>9.2 By Juniors CV</h4>
    <p>Juniors CV may terminate an account in case of ToS violation, with or without notice.</p>
    
    <h3>Article 10 – ToS Modifications</h3>
    <p>Juniors CV reserves the right to modify these ToS at any time.</p>
    <p>Users will be informed of major changes via the application or email.</p>
    <p>Continued use of the service after modification constitutes acceptance of the new ToS.</p>
    
    <h3>Article 11 – Applicable Law and Jurisdiction</h3>
    <p>These ToS are governed by Tunisian law (or applicable law according to your jurisdiction).</p>
    <p>In case of dispute, the parties will strive to find an amicable solution.<br />
    Otherwise, the competent courts will be those of the registered office of Juniors CV.</p>
    
    <h3>Article 12 – Contact</h3>
    <p>For any questions regarding these ToS:</p>
    <p><strong>Email:</strong><br />
    contact@juniorscv.com<br />
    contact.boostifyskills@gmail.com</p>
    <p><strong>Website:</strong> www.juniorscv.com</p>
    
    <hr />
    
    <p><strong>Document Version:</strong> 1.0 Official<br />
    <strong>Effective Date:</strong> 25/01/2026<br />
    <strong>Document ID:</strong> BS-TOS-2026-001</p>
  </>
);

const FrenchVersion = () => (
  <>
    <h1>CONDITIONS GÉNÉRALES D'UTILISATION – Boostify Skills</h1>
    
    <p><strong>Dernière mise à jour:</strong> 25/01/2026</p>
    <p><strong>Version:</strong> 1.0 Officielle</p>
    
    <hr />
    
    <h3>Préambule</h3>
    <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de l'application mobile <strong>Boostify Skills</strong>, éditée par <strong>Juniors CV</strong>.</p>
    <p>En téléchargeant, installant ou utilisant l'application, vous acceptez sans réserve les présentes CGU.</p>
    
    <hr />
    
    <h3>Article 1 – Présentation du service</h3>
    <p><strong>Boostify Skills</strong> est une plateforme de développement des compétences proposant :</p>
    <ul>
      <li>Tests de personnalité et d'orientation (7P, VARK, personnalité)</li>
      <li>Parcours d'upskilling personnalisés</li>
      <li>Quiz et défis pour valider les compétences</li>
      <li>Certificats et badges de réussite</li>
      <li>Recommandations d'emploi et coaching</li>
      <li>Suivi de progression et analytics</li>
    </ul>
    
    <h3>Article 2 – Accès au service</h3>
    
    <h4>2.1 Conditions d'accès</h4>
    <ul>
      <li>Avoir au moins 13 ans (ou l'âge légal dans votre pays)</li>
      <li>Créer un compte avec des informations exactes</li>
      <li>Disposer d'une connexion Internet et d'un appareil compatible</li>
    </ul>
    
    <h4>2.2 Inscription</h4>
    <p>L'utilisateur s'engage à fournir des informations vraies, exactes et à jour.<br />
    Toute fausse déclaration peut entraîner la suspension ou la résiliation du compte.</p>
    
    <h4>2.3 Sécurité du compte</h4>
    <p>L'utilisateur est responsable de la confidentialité de ses identifiants.<br />
    Toute utilisation frauduleuse doit être signalée immédiatement à :<br />
    contact@juniorscv.com</p>
    
    <h3>Article 3 – Utilisation du service</h3>
    
    <h4>3.1 Usage autorisé</h4>
    <p>L'utilisateur s'engage à utiliser Boostify Skills de manière loyale et conforme aux lois en vigueur.</p>
    
    <h4>3.2 Usages interdits</h4>
    <p>Il est strictement interdit de :</p>
    <ul>
      <li>Partager son compte avec des tiers</li>
      <li>Utiliser des scripts, robots ou outils automatisés</li>
      <li>Tenter de contourner les mesures de sécurité</li>
      <li>Diffuser du contenu illégal, offensant ou inapproprié</li>
      <li>Copier, reproduire ou distribuer le contenu sans autorisation</li>
    </ul>
    
    <h3>Article 4 – Propriété intellectuelle</h3>
    
    <h4>4.1 Droits de Juniors CV</h4>
    <p>Tous les contenus de l'application (textes, images, logos, tests, quiz, vidéos, design) sont la propriété exclusive de <strong>Juniors CV</strong> ou de ses partenaires.</p>
    <p>Toute reproduction, distribution ou utilisation non autorisée est interdite.</p>
    
    <h4>4.2 Licence d'utilisation</h4>
    <p>Juniors CV vous accorde une licence personnelle, non exclusive, non transférable et révocable pour utiliser l'application.</p>
    
    <h4>4.3 Contenus utilisateur</h4>
    <p>En publiant du contenu (CV, portfolio, commentaires), vous accordez à Juniors CV une licence mondiale, gratuite et non exclusive pour utiliser, afficher et promouvoir ce contenu dans le cadre du service.</p>
    
    <h3>Article 5 – Certifications et résultats</h3>
    
    <h4>5.1 Validité des certificats</h4>
    <p>Les certificats délivrés attestent de la réussite de parcours ou de quiz au sein de l'application.</p>
    <p>Ils n'ont pas de valeur académique officielle mais peuvent être partagés sur les réseaux professionnels.</p>
    
    <h4>5.2 Authenticité</h4>
    <p>Les résultats doivent être obtenus de manière honnête.<br />
    Toute fraude entraîne la révocation du certificat et la suspension du compte.</p>
    
    <h3>Article 6 – Données personnelles</h3>
    <p>Le traitement des données personnelles est régi par notre <strong>Politique de Confidentialité</strong>.</p>
    <p>En utilisant Boostify Skills, vous acceptez la collecte et le traitement de vos données conformément à cette politique.</p>
    
    <h3>Article 7 – Responsabilité</h3>
    
    <h4>7.1 Disponibilité du service</h4>
    <p>Juniors CV s'efforce d'assurer la disponibilité de l'application 24h/24, 7j/7.</p>
    <p>Toutefois, Juniors CV ne peut garantir une disponibilité totale et décline toute responsabilité en cas d'interruption technique.</p>
    
    <h4>7.2 Limitation de responsabilité</h4>
    <p>Juniors CV ne saurait être tenu responsable :</p>
    <ul>
      <li>Des dommages directs ou indirects liés à l'utilisation du service</li>
      <li>De la perte de données ou de contenus</li>
      <li>Des décisions prises sur la base des recommandations ou résultats fournis</li>
      <li>Des interactions avec des tiers (employeurs, partenaires)</li>
    </ul>
    
    <h4>7.3 Contenu utilisateur</h4>
    <p>Juniors CV n'est pas responsable du contenu publié par les utilisateurs et se réserve le droit de le modérer ou de le supprimer.</p>
    
    <h3>Article 8 – Modification et suspension du service</h3>
    
    <h4>8.1 Modifications</h4>
    <p>Juniors CV se réserve le droit de modifier, suspendre ou interrompre tout ou partie du service à tout moment, sans préavis.</p>
    
    <h4>8.2 Suspension de compte</h4>
    <p>Juniors CV peut suspendre ou résilier un compte en cas de :</p>
    <ul>
      <li>Violation des présentes CGU</li>
      <li>Comportement frauduleux ou abusif</li>
      <li>Non-respect des lois applicables</li>
    </ul>
    
    <h3>Article 9 – Résiliation et suppression de compte</h3>
    
    <h4>9.1 Par l'utilisateur</h4>
    <p><strong>Supprimer votre compte :</strong></p>
    <ul>
      <li>Depuis l'application : Accédez à votre section profil et utilisez la fonctionnalité « Supprimer le compte »</li>
      <li>Via le lien web : <a href="https://juniorcvbackend-mxog.onrender.com" target="_blank" rel="noopener noreferrer">https://juniorcvbackend-mxog.onrender.com</a></li>
      <li>Par email : contact@juniorscv.com ou contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h4>9.2 Par Juniors CV</h4>
    <p>Juniors CV peut résilier un compte en cas de violation des CGU, avec ou sans préavis.</p>
    
    <h3>Article 10 – Modifications des CGU</h3>
    <p>Juniors CV se réserve le droit de modifier les présentes CGU à tout moment.</p>
    <p>Les utilisateurs seront informés des modifications majeures via l'application ou par email.</p>
    <p>La poursuite de l'utilisation du service après modification vaut acceptation des nouvelles CGU.</p>
    
    <h3>Article 11 – Loi applicable et juridiction</h3>
    <p>Les présentes CGU sont régies par le droit tunisien (ou le droit applicable selon votre juridiction).</p>
    <p>En cas de litige, les parties s'efforceront de trouver une solution amiable.<br />
    À défaut, les tribunaux compétents seront ceux du siège social de Juniors CV.</p>
    
    <h3>Article 12 – Contact</h3>
    <p>Pour toute question concernant les présentes CGU :</p>
    <p><strong>Email :</strong><br />
    contact@juniorscv.com<br />
    contact.boostifyskills@gmail.com</p>
    <p><strong>Site web :</strong> www.juniorscv.com</p>
    
    <hr />
    
    <p><strong>Version du document:</strong> 1.0 Officielle<br />
    <strong>Date d'effet:</strong> 25/01/2026<br />
    <strong>ID du document:</strong> BS-TOS-2026-001</p>
  </>
);

const ArabicVersion = () => (
  <>
    <h1>شروط الخدمة – Boostify Skills</h1>
    
    <p><strong>آخر تحديث:</strong> 25/01/2026</p>
    <p><strong>الإصدار:</strong> 1.0 رسمي</p>
    
    <hr />
    
    <h3>تمهيد</h3>
    <p>تحكم شروط الخدمة هذه الوصول إلى واستخدام تطبيق الهاتف المحمول <strong>Boostify Skills</strong>، المنشور بواسطة <strong>Juniors CV</strong>.</p>
    <p>من خلال تنزيل التطبيق أو تثبيته أو استخدامه، فإنك توافق دون قيد أو شرط على شروط الخدمة هذه.</p>
    
    <hr />
    
    <h3>المادة 1 – وصف الخدمة</h3>
    <p><strong>Boostify Skills</strong> هي منصة لتطوير المهارات تقدم:</p>
    <ul>
      <li>اختبارات الشخصية والتوجيه (7P، VARK، الشخصية)</li>
      <li>مسارات مخصصة لتحسين المهارات</li>
      <li>اختبارات وتحديات للتحقق من صحة المهارات</li>
      <li>شهادات وشارات الإنجاز</li>
      <li>توصيات الوظائف والتدريب</li>
      <li>تتبع التقدم والتحليلات</li>
    </ul>
    
    <h3>المادة 2 – الوصول إلى الخدمة</h3>
    
    <h4>2.1 شروط الوصول</h4>
    <ul>
      <li>أن يكون عمرك على الأقل 13 عامًا (أو السن القانوني في بلدك)</li>
      <li>إنشاء حساب بمعلومات دقيقة</li>
      <li>أن يكون لديك اتصال بالإنترنت وجهاز متوافق</li>
    </ul>
    
    <h4>2.2 التسجيل</h4>
    <p>يوافق المستخدم على تقديم معلومات صحيحة ودقيقة ومحدثة.<br />
    أي إعلان كاذب قد يؤدي إلى تعليق الحساب أو إنهائه.</p>
    
    <h4>2.3 أمان الحساب</h4>
    <p>المستخدم مسؤول عن سرية بيانات اعتماده.<br />
    يجب الإبلاغ عن أي استخدام احتيالي على الفور إلى:<br />
    contact@juniorscv.com</p>
    
    <h3>المادة 3 – استخدام الخدمة</h3>
    
    <h4>3.1 الاستخدام المصرح به</h4>
    <p>يوافق المستخدم على استخدام Boostify Skills بشكل عادل وبما يتوافق مع القوانين المعمول بها.</p>
    
    <h4>3.2 الاستخدامات المحظورة</h4>
    <p>يُحظر بشدة:</p>
    <ul>
      <li>مشاركة حسابك مع أطراف ثالثة</li>
      <li>استخدام البرامج النصية أو الروبوتات أو الأدوات الآلية</li>
      <li>محاولة تجاوز التدابير الأمنية</li>
      <li>توزيع محتوى غير قانوني أو مسيء أو غير لائق</li>
      <li>نسخ المحتوى أو إعادة إنتاجه أو توزيعه بدون إذن</li>
      <li>استخدام الخدمة لأغراض تجارية غير مصرح بها</li>
    </ul>
    
    <h3>المادة 4 – الملكية الفكرية</h3>
    
    <h4>4.1 حقوق Juniors CV</h4>
    <p>جميع محتويات التطبيق (النصوص والصور والشعارات والاختبارات والمسابقات ومقاطع الفيديو والتصميم) هي ملكية حصرية لـ <strong>Juniors CV</strong> أو شركائها.</p>
    <p>أي استنساخ أو توزيع أو استخدام غير مصرح به محظور.</p>
    
    <h4>4.2 ترخيص الاستخدام</h4>
    <p>تمنحك Juniors CV ترخيصًا شخصيًا وغير حصري وغير قابل للتحويل وقابل للإلغاء لاستخدام التطبيق.</p>
    
    <h4>4.3 محتوى المستخدم</h4>
    <p>من خلال نشر المحتوى (السيرة الذاتية، الملف الشخصي، التعليقات)، فإنك تمنح Juniors CV ترخيصًا عالميًا ومجانيًا وغير حصري لاستخدام هذا المحتوى وعرضه والترويج له كجزء من الخدمة.</p>
    
    <h3>المادة 5 – الشهادات والنتائج</h3>
    
    <h4>5.1 صلاحية الشهادة</h4>
    <p>الشهادات الصادرة تشهد على إكمال الدورات أو الاختبارات بنجاح داخل التطبيق.</p>
    <p>ليس لها قيمة أكاديمية رسمية ولكن يمكن مشاركتها على الشبكات المهنية.</p>
    
    <h4>5.2 الأصالة</h4>
    <p>يجب الحصول على النتائج بأمانة.<br />
    أي احتيال يؤدي إلى إلغاء الشهادة وتعليق الحساب.</p>
    
    <h3>المادة 6 – البيانات الشخصية</h3>
    <p>تخضع معالجة البيانات الشخصية لـ <strong>سياسة الخصوصية</strong> الخاصة بنا.</p>
    <p>باستخدام Boostify Skills، فإنك توافق على جمع ومعالجة بياناتك وفقًا لهذه السياسة.</p>
    
    <h3>المادة 7 – المسؤولية</h3>
    
    <h4>7.1 توفر الخدمة</h4>
    <p>تسعى Juniors CV جاهدة لضمان توفر التطبيق على مدار الساعة طوال أيام الأسبوع.</p>
    <p>ومع ذلك، لا يمكن لـ Juniors CV ضمان التوفر الكامل وتخلي مسؤوليتها في حالة الانقطاع التقني.</p>
    
    <h4>7.2 حدود المسؤولية</h4>
    <p>لا يمكن تحميل Juniors CV المسؤولية عن:</p>
    <ul>
      <li>الأضرار المباشرة أو غير المباشرة المتعلقة باستخدام الخدمة</li>
      <li>فقدان البيانات أو المحتوى</li>
      <li>القرارات المتخذة بناءً على التوصيات أو النتائج المقدمة</li>
      <li>التفاعلات مع أطراف ثالثة (أصحاب العمل، الشركاء)</li>
    </ul>
    
    <h4>7.3 محتوى المستخدم</h4>
    <p>Juniors CV غير مسؤولة عن المحتوى الذي ينشره المستخدمون وتحتفظ بالحق في تعديله أو حذفه.</p>
    
    <h3>المادة 8 – تعديل الخدمة وتعليقها</h3>
    
    <h4>8.1 التعديلات</h4>
    <p>تحتفظ Juniors CV بالحق في تعديل أو تعليق أو إيقاف كل أو جزء من الخدمة في أي وقت، دون إشعار مسبق.</p>
    
    <h4>8.2 تعليق الحساب</h4>
    <p>قد تقوم Juniors CV بتعليق أو إنهاء حساب في حالة:</p>
    <ul>
      <li>انتهاك شروط الخدمة هذه</li>
      <li>سلوك احتيالي أو مسيء</li>
      <li>عدم الامتثال للقوانين المعمول بها</li>
    </ul>
    
    <h3>المادة 9 – الإنهاء وحذف الحساب</h3>
    
    <h4>9.1 من قبل المستخدم</h4>
    <p><strong>احذف حسابك:</strong></p>
    <ul>
      <li>من التطبيق: انتقل إلى قسم الملف الشخصي واستخدم ميزة "حذف الحساب"</li>
      <li>عبر رابط الويب: <a href="https://juniorcvbackend-mxog.onrender.com" target="_blank" rel="noopener noreferrer">https://juniorcvbackend-mxog.onrender.com</a></li>
      <li>عبر البريد الإلكتروني: contact@juniorscv.com أو contact.boostifyskills@gmail.com</li>
    </ul>
    
    <h4>9.2 من قبل Juniors CV</h4>
    <p>قد تقوم Juniors CV بإنهاء حساب في حالة انتهاك شروط الخدمة، مع أو بدون إشعار.</p>
    
    <h3>المادة 10 – تعديلات شروط الخدمة</h3>
    <p>تحتفظ Juniors CV بالحق في تعديل شروط الخدمة هذه في أي وقت.</p>
    <p>سيتم إخطار المستخدمين بالتغييرات الرئيسية عبر التطبيق أو البريد الإلكتروني.</p>
    <p>الاستمرار في استخدام الخدمة بعد التعديل يشكل قبولاً لشروط الخدمة الجديدة.</p>
    
    <h3>المادة 11 – القانون المعمول به والاختصاص القضائي</h3>
    <p>تخضع شروط الخدمة هذه للقانون التونسي (أو القانون المعمول به وفقًا لولايتك القضائية).</p>
    <p>في حالة النزاع، ستسعى الأطراف إلى إيجاد حل ودي.<br />
    وإلا، فإن المحاكم المختصة ستكون تلك الموجودة في المقر المسجل لـ Juniors CV.</p>
    
    <h3>المادة 12 – اتصل بنا</h3>
    <p>لأية أسئلة تتعلق بشروط الخدمة هذه:</p>
    <p><strong>البريد الإلكتروني:</strong><br />
    contact@juniorscv.com<br />
    contact.boostifyskills@gmail.com</p>
    <p><strong>الموقع الإلكتروني:</strong> www.juniorscv.com</p>
    
    <hr />
    
    <p><strong>إصدار الوثيقة:</strong> 1.0 رسمي<br />
    <strong>تاريخ السريان:</strong> 25/01/2026<br />
    <strong>معرف الوثيقة:</strong> BS-TOS-2026-001</p>
  </>
);

export default TermsOfService;
