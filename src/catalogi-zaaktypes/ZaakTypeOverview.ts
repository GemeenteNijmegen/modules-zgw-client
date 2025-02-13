import * as catalogi from '../catalogi-generated-client';
/**
 * The interface ZaakTypeOverview presents all aspects of a ZaakType
 * The versions are presented
 * The linked properties such as eigenschappen and rolTypen are
 * shown in a human readable way of the latest version of ZaakType
 *
 * Why?
 * The ZGW-Catalogi ZaakType returns its eigenschappen, roltypen and
 * other linked properties. However, they are presented as a url or uuid.
 * This presentation makes it difficult to retrieve properties and configure code.
 *
 * For example:
 * You want to get a ZaakType from the Catalogi from a supplier.
 * You want the latest version.
 * You want to make a Zaak based on ZaakType.
 * You want to add a status "GESTART" and a Rol "INITIATOR"
 * Based on the result of the Zaaktype you have to determine
 * which version is the latest and write code to know which url/uuid is linked
 * to status "GESTART" and which url is "INITATOR" in RolTypen
 *
 * This interface provides the entire overview in this situation.
 */

export interface ZaakTypeOverview {
  /**
    * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt
    * Er kunnen meerdere versies bestaan van een Zaaktype. Die hebben dezelfde identificatie.
    * De url is per versie wel verschillend.
    */
  identificatie: string;
  /**
     * De url van de laatste versie van het Zaaktype.
     * De url is uniek per versie en geeft indirect ook informatie over de omgeving.
     */
  url: string;
  /**
     * De datum waarop de (gewijzigde) kenmerken van het ZAAKTYPE geldig zijn geworden
     * jjjj-mm-dd - 2025-01-01
     */
  versiedatum: string;
  /**
     * Omschrijving voor leesbaarheid
     */
  omschrijving: string;
  /**
     * Hier kun je optioneel meegeven en dus ook terugkrijgen op
     * welke omgeving van de leverancier dit ZaakTypeOverview opgehaald is.
     * Bijvoorbeeld: 'Development' of 'PREPROD'
     */
  apiOmgeving?: string;

    
  statusTypen:{ url: string; kenmerk?: string; omschrijving?: string; default?: boolean}[];
  resultaatTypen: { url: string; kenmerk?: string; omschrijving?: string; default?: boolean}[];
  eigenschappen: { url: string; kenmerk?: string; naam?: string; default?: boolean}[];
  informatieObjectTypen?: { url: string; kenmerk?: string; omschrijving?: string;default?: boolean}[];
  rolTypen: { url: string; kenmerk?: string; omschrijving?: string; default?: boolean}[];
  /**
     * De laatste versie van het gehele zaaktype object indien gewenst
     * Op deze manier kan het gehele origineel snel bekeken worden
     */
  completeZaakType? : catalogi.ZaakType;
}

