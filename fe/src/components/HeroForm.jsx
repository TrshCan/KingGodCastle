import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const HeroForm = ({ hero, regions = [], heroClasses = [], onSave, onCancel, isLoading }) => {
  // Debug logging
  useEffect(() => {
    console.log('HeroForm - regions:', regions);
    console.log('HeroForm - heroClasses:', heroClasses);
  }, [regions, heroClasses]);
  const [formData, setFormData] = useState({
    name: '',
    regionId: '',
    classId: '',
    title: '',
    description: '',
    rarity: 'common',
    icon: '',
    illustration: '',
    card: '',
  });

  useEffect(() => {
    if (hero) {
      setFormData({
        name: hero.name || '',
        regionId: String(hero.region?.id || hero.regionId || ''),
        classId: String(hero.heroClass?.id || hero.classId || ''),
        title: hero.title || '',
        description: hero.description || '',
        rarity: hero.rarity || 'common',
        icon: hero.icon || '',
        illustration: hero.illustration || '',
        card: hero.card || '',
      });
    } else {
      // Reset form when creating new hero
      setFormData({
        name: '',
        regionId: '',
        classId: '',
        title: '',
        description: '',
        rarity: 'common',
        icon: '',
        illustration: '',
        card: '',
      });
    }
  }, [hero]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl border border-white/10 w-full max-w-5xl">
        <div className="bg-slate-800 border-b border-white/10 px-6 py-3 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            {hero ? 'Edit Hero' : 'Create Hero'}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-white/10 rounded-lg transition cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Hero name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Region <span className="text-red-400">*</span>
                </label>
                <select
                  name="regionId"
                  value={String(formData.regionId || '')}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
                >
                  <option value="">Select Region</option>
                  {Array.isArray(regions) && regions.length > 0 ? (
                    regions.map(region => (
                      <option key={region.id} value={String(region.id)}>{region.name || `Region ${region.id}`}</option>
                    ))
                  ) : (
                    <option value="" disabled>Loading regions...</option>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Class <span className="text-red-400">*</span>
                </label>
                <select
                  name="classId"
                  value={String(formData.classId || '')}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
                >
                  <option value="">Select Class</option>
                  {Array.isArray(heroClasses) && heroClasses.length > 0 ? (
                    heroClasses.map(heroClass => (
                      <option key={heroClass.id} value={String(heroClass.id)}>{heroClass.name || `Class ${heroClass.id}`}</option>
                    ))
                  ) : (
                    <option value="" disabled>Loading classes...</option>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Rarity
                </label>
                <select
                  name="rarity"
                  value={formData.rarity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
                >
                  <option value="common">Common</option>
                  <option value="uncommon">Uncommon</option>
                  <option value="rare">Rare</option>
                  <option value="epic">Epic</option>
                  <option value="legendary">Legendary</option>
                  <option value="mythic">Mythic</option>
                  <option value="unique">Unique</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Hero title"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Hero description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Icon
                </label>
                <input
                  type="text"
                  name="icon"
                  value={formData.icon}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Icon emoji or URL"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Illustration URL
                </label>
                <input
                  type="text"
                  name="illustration"
                  value={formData.illustration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Illustration image URL"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Card URL
                </label>
                <input
                  type="text"
                  name="card"
                  value={formData.card}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Card image URL"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6 border-t border-white/10 mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
            >
              {isLoading ? 'Saving...' : (hero ? 'Update Hero' : 'Create Hero')}
            </button>
            <button
              type="button"
              onClick={onCancel}
              disabled={isLoading}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;

