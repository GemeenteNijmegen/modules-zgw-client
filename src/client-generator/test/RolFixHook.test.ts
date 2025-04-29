import { rolFixHook } from '../rolFixHook';

describe('rolFixHook', () => {
  // Stripped console log to mokc
  const baseComponent = (name: string) => ({
    typeName: name,
    rawTypeData: {
      type: 'object',
      properties: {},
      required: [],
    },
    componentName: 'schemas',
    typeData: null,
  } as any);

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it.each([
    ['exact match', 'Rol', true],
    ['prefix mismatch', 'RolMedewerker', false],
    ['postfix mismatch', 'aRol', false],
    ['different model', 'SomethingElse', false],
  ])('only applies hook when %s (typeName=%s)', (_case, typeName, shouldApply) => {
    const comp = baseComponent(typeName);

    const result = rolFixHook.onCreateComponent!(comp);
    if (shouldApply) {
      expect(result).toBe(comp);
    } else {
      expect(result).toBeUndefined();
    }
  });

  it('injects only the discriminator into rawTypeData', () => {
    const comp = baseComponent('Rol');
    rolFixHook.onCreateComponent!(comp)!;
    const schema = comp.rawTypeData!; // needed to prevent test specific type errors
    expect(Object.keys(schema)).toEqual(
      expect.arrayContaining(['type', 'properties', 'required', 'discriminator']),
    );
    expect(schema.discriminator).toEqual({
      propertyName: 'betrokkeneType',
    });
  });
});
