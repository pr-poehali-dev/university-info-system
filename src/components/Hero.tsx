import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const stats = [
    { label: "Факультетов", value: "14", icon: "Building2" },
    { label: "Кафедр", value: "75", icon: "Users" },
    { label: "Студентов", value: "18,000+", icon: "GraduationCap" },
    { label: "Преподавателей", value: "950+", icon: "UserCheck" },
  ];

  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4">Основан в 1930 году</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ставропольский государственный университет
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ведущий классический университет Северного Кавказа с богатой
            историей и современными образовательными технологиями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon name={stat.icon} className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
