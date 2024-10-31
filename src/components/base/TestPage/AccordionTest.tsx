import { Accordion } from '@/components/ui/Accordion/Accordion';

const testData = [
  {
    title: 'Що таке Луганська Асоціація організацій осіб з інвалідністю?',
    text: 'ЛАООІ є добровільним громадським об’єднанням, членами якого є фізичні особи та юридичні особи приватного права, створеним для здійснення та захисту прав i свобод людини та громадянина, задоволення суспільних, зокрема, економічних, соціальних, культурних та інших інтересів своїх членів та/або інших осіб',
  },
  {
    title: 'уганська Асоціація організацій осіб',
    text: 'sdaasdasdasdasdsadasdasdasddasd',
  },
  {
    title: 'уганська Асоціація організацій осіб',
    text: 'sdaasdasdasdasdsadasdasdasddasd',
  },
  {
    title: 'уганська Асоціація організацій осіб',
    text: 'sdaasdasdasdasdsadasdasdasddasd',
  },
  {
    title: 'уганська Асоціація організацій осіб',
    text: 'sdaasdasdasdasdsadasdasdasddasd',
  },
];

export const AccordionTest = () => {
  return (
    <div className="flex justify-center">
      <Accordion data={testData} />
    </div>
  );
};
