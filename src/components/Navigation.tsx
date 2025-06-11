import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "labs", label: "Лабораторные", icon: "FlaskConical" },
    { id: "theory", label: "Теория", icon: "BookOpen" },
    { id: "results", label: "Результаты", icon: "BarChart3" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Cpu" className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-xl font-bold text-gray-900">
              Архитектура ПК - Виртуальные лабораторные
            </h1>
          </div>

          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => setActiveSection(item.id)}
                className="flex items-center space-x-2"
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
