export const getImageUrl = name => {
  const modules = import.meta.glob('@/assets/images/*.png', { eager: true })
  const src = `@/assets/images/${name}.png`
  return modules[src].default
}
