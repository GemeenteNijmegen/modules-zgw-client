/**
 * The Rol type was generated incorrectly because Rol did not have a discriminator.
 * betrokkeneIdentificatie (not required) changes beased on the enum in betrokkenetype
 * However, when this is not specified in the openapi.yaml spec with a discriminator and based on what,
 * it generates unusable types that typescripts resolves as never "down the type-road".
 * This hook checks if the component is Rol and adds this discriminator before further generation is done.
 */
export const rolFixHook = {
  onCreateComponent(component: any) {
    // Only target the Rol model
    if (component.typeName !== 'Rol') return undefined;
    if (component.rawTypeData) {
      // console.log('============== ROL ============== ');
      // console.dir(component, {depth: 20, colors: true, showProxy: true});
      component.rawTypeData.discriminator = {
        propertyName: 'betrokkeneType',
      };

      return component;
    } else {
      console.warn('onCreateComponent typeName was Rol, however, no rawTypeData present');
      return undefined;
    }
  },
};
