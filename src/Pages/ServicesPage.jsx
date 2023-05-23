import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import ServiceComp from '../components/ServiceComp/ServiceComp'
const ServicesPage = () => {
  const social = [
    { id: 1, desc: 'استشارة مجانية لمدة 45 دقيقة نوضح لك من خلالها كامل تفاصيل العمل' },
    { id: 2, desc: 'انشاء الحساب الإعلاني' },
    { id: 3, desc: 'ربط وتثبيت البكسل' },
    { id: 4, desc: 'تحليل الجمهور' },
    { id: 5, desc: 'تقرير للحملات' },
    { id: 6, desc: 'دراسة وتحليل المنافسين' },
    { id: 7, desc: 'كتابة المحتوى الإعلاني' },
    { id: 8, desc: 'المتابعة الدورية واليومية للأداء وتطوير الحملات' }
  ]
  const google = [
    { id: 1, desc: 'استشارة مجانية لمدة 45 دقيقة نوضح لك من خلالها كامل تفاصيل العمل' },
    { id: 2, desc: 'انشاء الحساب الإعلاني وتعديل الاعدادات' },
    { id: 3, desc: 'ربط الحساب الإعلاني في خدمات جوجل (جوجل سيرش كونسول & جوجل انالتيكس & جوجل تاج مانجر)' },
    { id: 4, desc: 'اختيار الحملات المناسبة لاحتياجات المشروع' },
    { id: 5, desc: 'تحليل الكلمات المفتاحية' },
    { id: 6, desc: 'تقرير أسبوعي للحملات الفعالة' },
    { id: 7, desc: 'دراسة وتحليل المنافسين' },
    { id: 8, desc: 'كتابة المحتوى الإعلاني' },
    { id: 9, desc: 'المتابعة الدورية واليومية للأداء وتطوير الحملات' }
  ]
  return (
    <>
    <NavBar />
    <div
    style={{
      marginTop: '10rem'
      ,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
    <h1 >
    نضيء لعملائك طريق الوصول اليك
    </h1>
    </div>
  
 <ServiceComp  data={google} title={'اعلانات جوجل'}/>
 <ServiceComp forward data={social} 
 title={'اعلانات سوشيال ميديا'}
 />
    <Footer />
   
  </> 
  )
}

export default ServicesPage