/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/photos": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.photos.id"];
          user_id?: parameters["rowFilter.photos.user_id"];
          created_at?: parameters["rowFilter.photos.created_at"];
          url?: parameters["rowFilter.photos.url"];
          caption?: parameters["rowFilter.photos.caption"];
          likes?: parameters["rowFilter.photos.likes"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["photos"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** photos */
          photos?: definitions["photos"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferPost"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.photos.id"];
          user_id?: parameters["rowFilter.photos.user_id"];
          created_at?: parameters["rowFilter.photos.created_at"];
          url?: parameters["rowFilter.photos.url"];
          caption?: parameters["rowFilter.photos.caption"];
          likes?: parameters["rowFilter.photos.likes"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.photos.id"];
          user_id?: parameters["rowFilter.photos.user_id"];
          created_at?: parameters["rowFilter.photos.created_at"];
          url?: parameters["rowFilter.photos.url"];
          caption?: parameters["rowFilter.photos.caption"];
          likes?: parameters["rowFilter.photos.likes"];
        };
        body: {
          /** photos */
          photos?: definitions["photos"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          user_id?: parameters["rowFilter.users.user_id"];
          created_at?: parameters["rowFilter.users.created_at"];
          email?: parameters["rowFilter.users.email"];
          name_first?: parameters["rowFilter.users.name_first"];
          name_last?: parameters["rowFilter.users.name_last"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users */
          users?: definitions["users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferPost"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          user_id?: parameters["rowFilter.users.user_id"];
          created_at?: parameters["rowFilter.users.created_at"];
          email?: parameters["rowFilter.users.email"];
          name_first?: parameters["rowFilter.users.name_first"];
          name_last?: parameters["rowFilter.users.name_last"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          user_id?: parameters["rowFilter.users.user_id"];
          created_at?: parameters["rowFilter.users.created_at"];
          email?: parameters["rowFilter.users.email"];
          name_first?: parameters["rowFilter.users.name_first"];
          name_last?: parameters["rowFilter.users.name_last"];
        };
        body: {
          /** users */
          users?: definitions["users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  photos: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    url: string;
    /** Format: text */
    caption?: string;
    /** Format: bigint */
    likes: number;
  };
  users: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: uuid */
    user_id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    email: string;
    /** Format: character varying */
    name_first?: string;
    /** Format: character varying */
    name_last?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferPost:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description photos */
  "body.photos": definitions["photos"];
  /** Format: bigint */
  "rowFilter.photos.id": string;
  /** Format: uuid */
  "rowFilter.photos.user_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.photos.created_at": string;
  /** Format: text */
  "rowFilter.photos.url": string;
  /** Format: text */
  "rowFilter.photos.caption": string;
  /** Format: bigint */
  "rowFilter.photos.likes": string;
  /** @description users */
  "body.users": definitions["users"];
  /** Format: uuid */
  "rowFilter.users.id": string;
  /** Format: uuid */
  "rowFilter.users.user_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.users.created_at": string;
  /** Format: text */
  "rowFilter.users.email": string;
  /** Format: character varying */
  "rowFilter.users.name_first": string;
  /** Format: character varying */
  "rowFilter.users.name_last": string;
}

export interface operations {}

export interface external {}