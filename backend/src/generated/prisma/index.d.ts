
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ThiSinh
 * 
 */
export type ThiSinh = $Result.DefaultSelection<Prisma.$ThiSinhPayload>
/**
 * Model MonThi
 * 
 */
export type MonThi = $Result.DefaultSelection<Prisma.$MonThiPayload>
/**
 * Model DiemThi
 * 
 */
export type DiemThi = $Result.DefaultSelection<Prisma.$DiemThiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ThiSinhs
 * const thiSinhs = await prisma.thiSinh.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ThiSinhs
   * const thiSinhs = await prisma.thiSinh.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.thiSinh`: Exposes CRUD operations for the **ThiSinh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThiSinhs
    * const thiSinhs = await prisma.thiSinh.findMany()
    * ```
    */
  get thiSinh(): Prisma.ThiSinhDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monThi`: Exposes CRUD operations for the **MonThi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonThis
    * const monThis = await prisma.monThi.findMany()
    * ```
    */
  get monThi(): Prisma.MonThiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diemThi`: Exposes CRUD operations for the **DiemThi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiemThis
    * const diemThis = await prisma.diemThi.findMany()
    * ```
    */
  get diemThi(): Prisma.DiemThiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ThiSinh: 'ThiSinh',
    MonThi: 'MonThi',
    DiemThi: 'DiemThi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "thiSinh" | "monThi" | "diemThi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ThiSinh: {
        payload: Prisma.$ThiSinhPayload<ExtArgs>
        fields: Prisma.ThiSinhFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThiSinhFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThiSinhFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>
          }
          findFirst: {
            args: Prisma.ThiSinhFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThiSinhFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>
          }
          findMany: {
            args: Prisma.ThiSinhFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>[]
          }
          create: {
            args: Prisma.ThiSinhCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>
          }
          createMany: {
            args: Prisma.ThiSinhCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThiSinhCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>[]
          }
          delete: {
            args: Prisma.ThiSinhDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>
          }
          update: {
            args: Prisma.ThiSinhUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>
          }
          deleteMany: {
            args: Prisma.ThiSinhDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThiSinhUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThiSinhUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>[]
          }
          upsert: {
            args: Prisma.ThiSinhUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiSinhPayload>
          }
          aggregate: {
            args: Prisma.ThiSinhAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThiSinh>
          }
          groupBy: {
            args: Prisma.ThiSinhGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThiSinhGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThiSinhCountArgs<ExtArgs>
            result: $Utils.Optional<ThiSinhCountAggregateOutputType> | number
          }
        }
      }
      MonThi: {
        payload: Prisma.$MonThiPayload<ExtArgs>
        fields: Prisma.MonThiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonThiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonThiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>
          }
          findFirst: {
            args: Prisma.MonThiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonThiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>
          }
          findMany: {
            args: Prisma.MonThiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>[]
          }
          create: {
            args: Prisma.MonThiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>
          }
          createMany: {
            args: Prisma.MonThiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonThiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>[]
          }
          delete: {
            args: Prisma.MonThiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>
          }
          update: {
            args: Prisma.MonThiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>
          }
          deleteMany: {
            args: Prisma.MonThiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonThiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonThiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>[]
          }
          upsert: {
            args: Prisma.MonThiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonThiPayload>
          }
          aggregate: {
            args: Prisma.MonThiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonThi>
          }
          groupBy: {
            args: Prisma.MonThiGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonThiGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonThiCountArgs<ExtArgs>
            result: $Utils.Optional<MonThiCountAggregateOutputType> | number
          }
        }
      }
      DiemThi: {
        payload: Prisma.$DiemThiPayload<ExtArgs>
        fields: Prisma.DiemThiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiemThiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiemThiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>
          }
          findFirst: {
            args: Prisma.DiemThiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiemThiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>
          }
          findMany: {
            args: Prisma.DiemThiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>[]
          }
          create: {
            args: Prisma.DiemThiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>
          }
          createMany: {
            args: Prisma.DiemThiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiemThiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>[]
          }
          delete: {
            args: Prisma.DiemThiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>
          }
          update: {
            args: Prisma.DiemThiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>
          }
          deleteMany: {
            args: Prisma.DiemThiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiemThiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiemThiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>[]
          }
          upsert: {
            args: Prisma.DiemThiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiemThiPayload>
          }
          aggregate: {
            args: Prisma.DiemThiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiemThi>
          }
          groupBy: {
            args: Prisma.DiemThiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiemThiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiemThiCountArgs<ExtArgs>
            result: $Utils.Optional<DiemThiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    thiSinh?: ThiSinhOmit
    monThi?: MonThiOmit
    diemThi?: DiemThiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ThiSinhCountOutputType
   */

  export type ThiSinhCountOutputType = {
    diemThis: number
  }

  export type ThiSinhCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diemThis?: boolean | ThiSinhCountOutputTypeCountDiemThisArgs
  }

  // Custom InputTypes
  /**
   * ThiSinhCountOutputType without action
   */
  export type ThiSinhCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinhCountOutputType
     */
    select?: ThiSinhCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThiSinhCountOutputType without action
   */
  export type ThiSinhCountOutputTypeCountDiemThisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiemThiWhereInput
  }


  /**
   * Count Type MonThiCountOutputType
   */

  export type MonThiCountOutputType = {
    diemThis: number
  }

  export type MonThiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diemThis?: boolean | MonThiCountOutputTypeCountDiemThisArgs
  }

  // Custom InputTypes
  /**
   * MonThiCountOutputType without action
   */
  export type MonThiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThiCountOutputType
     */
    select?: MonThiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonThiCountOutputType without action
   */
  export type MonThiCountOutputTypeCountDiemThisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiemThiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ThiSinh
   */

  export type AggregateThiSinh = {
    _count: ThiSinhCountAggregateOutputType | null
    _min: ThiSinhMinAggregateOutputType | null
    _max: ThiSinhMaxAggregateOutputType | null
  }

  export type ThiSinhMinAggregateOutputType = {
    sbd: string | null
  }

  export type ThiSinhMaxAggregateOutputType = {
    sbd: string | null
  }

  export type ThiSinhCountAggregateOutputType = {
    sbd: number
    _all: number
  }


  export type ThiSinhMinAggregateInputType = {
    sbd?: true
  }

  export type ThiSinhMaxAggregateInputType = {
    sbd?: true
  }

  export type ThiSinhCountAggregateInputType = {
    sbd?: true
    _all?: true
  }

  export type ThiSinhAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThiSinh to aggregate.
     */
    where?: ThiSinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThiSinhs to fetch.
     */
    orderBy?: ThiSinhOrderByWithRelationInput | ThiSinhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThiSinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThiSinhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThiSinhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ThiSinhs
    **/
    _count?: true | ThiSinhCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThiSinhMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThiSinhMaxAggregateInputType
  }

  export type GetThiSinhAggregateType<T extends ThiSinhAggregateArgs> = {
        [P in keyof T & keyof AggregateThiSinh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThiSinh[P]>
      : GetScalarType<T[P], AggregateThiSinh[P]>
  }




  export type ThiSinhGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThiSinhWhereInput
    orderBy?: ThiSinhOrderByWithAggregationInput | ThiSinhOrderByWithAggregationInput[]
    by: ThiSinhScalarFieldEnum[] | ThiSinhScalarFieldEnum
    having?: ThiSinhScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThiSinhCountAggregateInputType | true
    _min?: ThiSinhMinAggregateInputType
    _max?: ThiSinhMaxAggregateInputType
  }

  export type ThiSinhGroupByOutputType = {
    sbd: string
    _count: ThiSinhCountAggregateOutputType | null
    _min: ThiSinhMinAggregateOutputType | null
    _max: ThiSinhMaxAggregateOutputType | null
  }

  type GetThiSinhGroupByPayload<T extends ThiSinhGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThiSinhGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThiSinhGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThiSinhGroupByOutputType[P]>
            : GetScalarType<T[P], ThiSinhGroupByOutputType[P]>
        }
      >
    >


  export type ThiSinhSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sbd?: boolean
    diemThis?: boolean | ThiSinh$diemThisArgs<ExtArgs>
    _count?: boolean | ThiSinhCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thiSinh"]>

  export type ThiSinhSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sbd?: boolean
  }, ExtArgs["result"]["thiSinh"]>

  export type ThiSinhSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sbd?: boolean
  }, ExtArgs["result"]["thiSinh"]>

  export type ThiSinhSelectScalar = {
    sbd?: boolean
  }

  export type ThiSinhOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sbd", ExtArgs["result"]["thiSinh"]>
  export type ThiSinhInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diemThis?: boolean | ThiSinh$diemThisArgs<ExtArgs>
    _count?: boolean | ThiSinhCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThiSinhIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ThiSinhIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ThiSinhPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ThiSinh"
    objects: {
      diemThis: Prisma.$DiemThiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sbd: string
    }, ExtArgs["result"]["thiSinh"]>
    composites: {}
  }

  type ThiSinhGetPayload<S extends boolean | null | undefined | ThiSinhDefaultArgs> = $Result.GetResult<Prisma.$ThiSinhPayload, S>

  type ThiSinhCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThiSinhFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThiSinhCountAggregateInputType | true
    }

  export interface ThiSinhDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ThiSinh'], meta: { name: 'ThiSinh' } }
    /**
     * Find zero or one ThiSinh that matches the filter.
     * @param {ThiSinhFindUniqueArgs} args - Arguments to find a ThiSinh
     * @example
     * // Get one ThiSinh
     * const thiSinh = await prisma.thiSinh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThiSinhFindUniqueArgs>(args: SelectSubset<T, ThiSinhFindUniqueArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ThiSinh that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThiSinhFindUniqueOrThrowArgs} args - Arguments to find a ThiSinh
     * @example
     * // Get one ThiSinh
     * const thiSinh = await prisma.thiSinh.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThiSinhFindUniqueOrThrowArgs>(args: SelectSubset<T, ThiSinhFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThiSinh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiSinhFindFirstArgs} args - Arguments to find a ThiSinh
     * @example
     * // Get one ThiSinh
     * const thiSinh = await prisma.thiSinh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThiSinhFindFirstArgs>(args?: SelectSubset<T, ThiSinhFindFirstArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThiSinh that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiSinhFindFirstOrThrowArgs} args - Arguments to find a ThiSinh
     * @example
     * // Get one ThiSinh
     * const thiSinh = await prisma.thiSinh.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThiSinhFindFirstOrThrowArgs>(args?: SelectSubset<T, ThiSinhFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ThiSinhs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiSinhFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThiSinhs
     * const thiSinhs = await prisma.thiSinh.findMany()
     * 
     * // Get first 10 ThiSinhs
     * const thiSinhs = await prisma.thiSinh.findMany({ take: 10 })
     * 
     * // Only select the `sbd`
     * const thiSinhWithSbdOnly = await prisma.thiSinh.findMany({ select: { sbd: true } })
     * 
     */
    findMany<T extends ThiSinhFindManyArgs>(args?: SelectSubset<T, ThiSinhFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ThiSinh.
     * @param {ThiSinhCreateArgs} args - Arguments to create a ThiSinh.
     * @example
     * // Create one ThiSinh
     * const ThiSinh = await prisma.thiSinh.create({
     *   data: {
     *     // ... data to create a ThiSinh
     *   }
     * })
     * 
     */
    create<T extends ThiSinhCreateArgs>(args: SelectSubset<T, ThiSinhCreateArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ThiSinhs.
     * @param {ThiSinhCreateManyArgs} args - Arguments to create many ThiSinhs.
     * @example
     * // Create many ThiSinhs
     * const thiSinh = await prisma.thiSinh.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThiSinhCreateManyArgs>(args?: SelectSubset<T, ThiSinhCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ThiSinhs and returns the data saved in the database.
     * @param {ThiSinhCreateManyAndReturnArgs} args - Arguments to create many ThiSinhs.
     * @example
     * // Create many ThiSinhs
     * const thiSinh = await prisma.thiSinh.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ThiSinhs and only return the `sbd`
     * const thiSinhWithSbdOnly = await prisma.thiSinh.createManyAndReturn({
     *   select: { sbd: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThiSinhCreateManyAndReturnArgs>(args?: SelectSubset<T, ThiSinhCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ThiSinh.
     * @param {ThiSinhDeleteArgs} args - Arguments to delete one ThiSinh.
     * @example
     * // Delete one ThiSinh
     * const ThiSinh = await prisma.thiSinh.delete({
     *   where: {
     *     // ... filter to delete one ThiSinh
     *   }
     * })
     * 
     */
    delete<T extends ThiSinhDeleteArgs>(args: SelectSubset<T, ThiSinhDeleteArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ThiSinh.
     * @param {ThiSinhUpdateArgs} args - Arguments to update one ThiSinh.
     * @example
     * // Update one ThiSinh
     * const thiSinh = await prisma.thiSinh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThiSinhUpdateArgs>(args: SelectSubset<T, ThiSinhUpdateArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ThiSinhs.
     * @param {ThiSinhDeleteManyArgs} args - Arguments to filter ThiSinhs to delete.
     * @example
     * // Delete a few ThiSinhs
     * const { count } = await prisma.thiSinh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThiSinhDeleteManyArgs>(args?: SelectSubset<T, ThiSinhDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThiSinhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiSinhUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThiSinhs
     * const thiSinh = await prisma.thiSinh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThiSinhUpdateManyArgs>(args: SelectSubset<T, ThiSinhUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThiSinhs and returns the data updated in the database.
     * @param {ThiSinhUpdateManyAndReturnArgs} args - Arguments to update many ThiSinhs.
     * @example
     * // Update many ThiSinhs
     * const thiSinh = await prisma.thiSinh.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ThiSinhs and only return the `sbd`
     * const thiSinhWithSbdOnly = await prisma.thiSinh.updateManyAndReturn({
     *   select: { sbd: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThiSinhUpdateManyAndReturnArgs>(args: SelectSubset<T, ThiSinhUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ThiSinh.
     * @param {ThiSinhUpsertArgs} args - Arguments to update or create a ThiSinh.
     * @example
     * // Update or create a ThiSinh
     * const thiSinh = await prisma.thiSinh.upsert({
     *   create: {
     *     // ... data to create a ThiSinh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThiSinh we want to update
     *   }
     * })
     */
    upsert<T extends ThiSinhUpsertArgs>(args: SelectSubset<T, ThiSinhUpsertArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ThiSinhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiSinhCountArgs} args - Arguments to filter ThiSinhs to count.
     * @example
     * // Count the number of ThiSinhs
     * const count = await prisma.thiSinh.count({
     *   where: {
     *     // ... the filter for the ThiSinhs we want to count
     *   }
     * })
    **/
    count<T extends ThiSinhCountArgs>(
      args?: Subset<T, ThiSinhCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThiSinhCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThiSinh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiSinhAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThiSinhAggregateArgs>(args: Subset<T, ThiSinhAggregateArgs>): Prisma.PrismaPromise<GetThiSinhAggregateType<T>>

    /**
     * Group by ThiSinh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiSinhGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThiSinhGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThiSinhGroupByArgs['orderBy'] }
        : { orderBy?: ThiSinhGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThiSinhGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThiSinhGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ThiSinh model
   */
  readonly fields: ThiSinhFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ThiSinh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThiSinhClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diemThis<T extends ThiSinh$diemThisArgs<ExtArgs> = {}>(args?: Subset<T, ThiSinh$diemThisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ThiSinh model
   */
  interface ThiSinhFieldRefs {
    readonly sbd: FieldRef<"ThiSinh", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ThiSinh findUnique
   */
  export type ThiSinhFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * Filter, which ThiSinh to fetch.
     */
    where: ThiSinhWhereUniqueInput
  }

  /**
   * ThiSinh findUniqueOrThrow
   */
  export type ThiSinhFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * Filter, which ThiSinh to fetch.
     */
    where: ThiSinhWhereUniqueInput
  }

  /**
   * ThiSinh findFirst
   */
  export type ThiSinhFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * Filter, which ThiSinh to fetch.
     */
    where?: ThiSinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThiSinhs to fetch.
     */
    orderBy?: ThiSinhOrderByWithRelationInput | ThiSinhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThiSinhs.
     */
    cursor?: ThiSinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThiSinhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThiSinhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThiSinhs.
     */
    distinct?: ThiSinhScalarFieldEnum | ThiSinhScalarFieldEnum[]
  }

  /**
   * ThiSinh findFirstOrThrow
   */
  export type ThiSinhFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * Filter, which ThiSinh to fetch.
     */
    where?: ThiSinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThiSinhs to fetch.
     */
    orderBy?: ThiSinhOrderByWithRelationInput | ThiSinhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThiSinhs.
     */
    cursor?: ThiSinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThiSinhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThiSinhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThiSinhs.
     */
    distinct?: ThiSinhScalarFieldEnum | ThiSinhScalarFieldEnum[]
  }

  /**
   * ThiSinh findMany
   */
  export type ThiSinhFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * Filter, which ThiSinhs to fetch.
     */
    where?: ThiSinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThiSinhs to fetch.
     */
    orderBy?: ThiSinhOrderByWithRelationInput | ThiSinhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ThiSinhs.
     */
    cursor?: ThiSinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThiSinhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThiSinhs.
     */
    skip?: number
    distinct?: ThiSinhScalarFieldEnum | ThiSinhScalarFieldEnum[]
  }

  /**
   * ThiSinh create
   */
  export type ThiSinhCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * The data needed to create a ThiSinh.
     */
    data: XOR<ThiSinhCreateInput, ThiSinhUncheckedCreateInput>
  }

  /**
   * ThiSinh createMany
   */
  export type ThiSinhCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ThiSinhs.
     */
    data: ThiSinhCreateManyInput | ThiSinhCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ThiSinh createManyAndReturn
   */
  export type ThiSinhCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * The data used to create many ThiSinhs.
     */
    data: ThiSinhCreateManyInput | ThiSinhCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ThiSinh update
   */
  export type ThiSinhUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * The data needed to update a ThiSinh.
     */
    data: XOR<ThiSinhUpdateInput, ThiSinhUncheckedUpdateInput>
    /**
     * Choose, which ThiSinh to update.
     */
    where: ThiSinhWhereUniqueInput
  }

  /**
   * ThiSinh updateMany
   */
  export type ThiSinhUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ThiSinhs.
     */
    data: XOR<ThiSinhUpdateManyMutationInput, ThiSinhUncheckedUpdateManyInput>
    /**
     * Filter which ThiSinhs to update
     */
    where?: ThiSinhWhereInput
    /**
     * Limit how many ThiSinhs to update.
     */
    limit?: number
  }

  /**
   * ThiSinh updateManyAndReturn
   */
  export type ThiSinhUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * The data used to update ThiSinhs.
     */
    data: XOR<ThiSinhUpdateManyMutationInput, ThiSinhUncheckedUpdateManyInput>
    /**
     * Filter which ThiSinhs to update
     */
    where?: ThiSinhWhereInput
    /**
     * Limit how many ThiSinhs to update.
     */
    limit?: number
  }

  /**
   * ThiSinh upsert
   */
  export type ThiSinhUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * The filter to search for the ThiSinh to update in case it exists.
     */
    where: ThiSinhWhereUniqueInput
    /**
     * In case the ThiSinh found by the `where` argument doesn't exist, create a new ThiSinh with this data.
     */
    create: XOR<ThiSinhCreateInput, ThiSinhUncheckedCreateInput>
    /**
     * In case the ThiSinh was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThiSinhUpdateInput, ThiSinhUncheckedUpdateInput>
  }

  /**
   * ThiSinh delete
   */
  export type ThiSinhDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
    /**
     * Filter which ThiSinh to delete.
     */
    where: ThiSinhWhereUniqueInput
  }

  /**
   * ThiSinh deleteMany
   */
  export type ThiSinhDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThiSinhs to delete
     */
    where?: ThiSinhWhereInput
    /**
     * Limit how many ThiSinhs to delete.
     */
    limit?: number
  }

  /**
   * ThiSinh.diemThis
   */
  export type ThiSinh$diemThisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    where?: DiemThiWhereInput
    orderBy?: DiemThiOrderByWithRelationInput | DiemThiOrderByWithRelationInput[]
    cursor?: DiemThiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiemThiScalarFieldEnum | DiemThiScalarFieldEnum[]
  }

  /**
   * ThiSinh without action
   */
  export type ThiSinhDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThiSinh
     */
    select?: ThiSinhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThiSinh
     */
    omit?: ThiSinhOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThiSinhInclude<ExtArgs> | null
  }


  /**
   * Model MonThi
   */

  export type AggregateMonThi = {
    _count: MonThiCountAggregateOutputType | null
    _avg: MonThiAvgAggregateOutputType | null
    _sum: MonThiSumAggregateOutputType | null
    _min: MonThiMinAggregateOutputType | null
    _max: MonThiMaxAggregateOutputType | null
  }

  export type MonThiAvgAggregateOutputType = {
    id: number | null
  }

  export type MonThiSumAggregateOutputType = {
    id: number | null
  }

  export type MonThiMinAggregateOutputType = {
    id: number | null
    maMon: string | null
    tenMon: string | null
  }

  export type MonThiMaxAggregateOutputType = {
    id: number | null
    maMon: string | null
    tenMon: string | null
  }

  export type MonThiCountAggregateOutputType = {
    id: number
    maMon: number
    tenMon: number
    _all: number
  }


  export type MonThiAvgAggregateInputType = {
    id?: true
  }

  export type MonThiSumAggregateInputType = {
    id?: true
  }

  export type MonThiMinAggregateInputType = {
    id?: true
    maMon?: true
    tenMon?: true
  }

  export type MonThiMaxAggregateInputType = {
    id?: true
    maMon?: true
    tenMon?: true
  }

  export type MonThiCountAggregateInputType = {
    id?: true
    maMon?: true
    tenMon?: true
    _all?: true
  }

  export type MonThiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonThi to aggregate.
     */
    where?: MonThiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonThis to fetch.
     */
    orderBy?: MonThiOrderByWithRelationInput | MonThiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonThiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonThis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonThis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonThis
    **/
    _count?: true | MonThiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonThiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonThiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonThiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonThiMaxAggregateInputType
  }

  export type GetMonThiAggregateType<T extends MonThiAggregateArgs> = {
        [P in keyof T & keyof AggregateMonThi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonThi[P]>
      : GetScalarType<T[P], AggregateMonThi[P]>
  }




  export type MonThiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonThiWhereInput
    orderBy?: MonThiOrderByWithAggregationInput | MonThiOrderByWithAggregationInput[]
    by: MonThiScalarFieldEnum[] | MonThiScalarFieldEnum
    having?: MonThiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonThiCountAggregateInputType | true
    _avg?: MonThiAvgAggregateInputType
    _sum?: MonThiSumAggregateInputType
    _min?: MonThiMinAggregateInputType
    _max?: MonThiMaxAggregateInputType
  }

  export type MonThiGroupByOutputType = {
    id: number
    maMon: string
    tenMon: string
    _count: MonThiCountAggregateOutputType | null
    _avg: MonThiAvgAggregateOutputType | null
    _sum: MonThiSumAggregateOutputType | null
    _min: MonThiMinAggregateOutputType | null
    _max: MonThiMaxAggregateOutputType | null
  }

  type GetMonThiGroupByPayload<T extends MonThiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonThiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonThiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonThiGroupByOutputType[P]>
            : GetScalarType<T[P], MonThiGroupByOutputType[P]>
        }
      >
    >


  export type MonThiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maMon?: boolean
    tenMon?: boolean
    diemThis?: boolean | MonThi$diemThisArgs<ExtArgs>
    _count?: boolean | MonThiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monThi"]>

  export type MonThiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maMon?: boolean
    tenMon?: boolean
  }, ExtArgs["result"]["monThi"]>

  export type MonThiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maMon?: boolean
    tenMon?: boolean
  }, ExtArgs["result"]["monThi"]>

  export type MonThiSelectScalar = {
    id?: boolean
    maMon?: boolean
    tenMon?: boolean
  }

  export type MonThiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maMon" | "tenMon", ExtArgs["result"]["monThi"]>
  export type MonThiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diemThis?: boolean | MonThi$diemThisArgs<ExtArgs>
    _count?: boolean | MonThiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonThiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MonThiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MonThiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonThi"
    objects: {
      diemThis: Prisma.$DiemThiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      maMon: string
      tenMon: string
    }, ExtArgs["result"]["monThi"]>
    composites: {}
  }

  type MonThiGetPayload<S extends boolean | null | undefined | MonThiDefaultArgs> = $Result.GetResult<Prisma.$MonThiPayload, S>

  type MonThiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonThiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonThiCountAggregateInputType | true
    }

  export interface MonThiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonThi'], meta: { name: 'MonThi' } }
    /**
     * Find zero or one MonThi that matches the filter.
     * @param {MonThiFindUniqueArgs} args - Arguments to find a MonThi
     * @example
     * // Get one MonThi
     * const monThi = await prisma.monThi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonThiFindUniqueArgs>(args: SelectSubset<T, MonThiFindUniqueArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonThi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonThiFindUniqueOrThrowArgs} args - Arguments to find a MonThi
     * @example
     * // Get one MonThi
     * const monThi = await prisma.monThi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonThiFindUniqueOrThrowArgs>(args: SelectSubset<T, MonThiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonThi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonThiFindFirstArgs} args - Arguments to find a MonThi
     * @example
     * // Get one MonThi
     * const monThi = await prisma.monThi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonThiFindFirstArgs>(args?: SelectSubset<T, MonThiFindFirstArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonThi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonThiFindFirstOrThrowArgs} args - Arguments to find a MonThi
     * @example
     * // Get one MonThi
     * const monThi = await prisma.monThi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonThiFindFirstOrThrowArgs>(args?: SelectSubset<T, MonThiFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonThis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonThiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonThis
     * const monThis = await prisma.monThi.findMany()
     * 
     * // Get first 10 MonThis
     * const monThis = await prisma.monThi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monThiWithIdOnly = await prisma.monThi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonThiFindManyArgs>(args?: SelectSubset<T, MonThiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonThi.
     * @param {MonThiCreateArgs} args - Arguments to create a MonThi.
     * @example
     * // Create one MonThi
     * const MonThi = await prisma.monThi.create({
     *   data: {
     *     // ... data to create a MonThi
     *   }
     * })
     * 
     */
    create<T extends MonThiCreateArgs>(args: SelectSubset<T, MonThiCreateArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonThis.
     * @param {MonThiCreateManyArgs} args - Arguments to create many MonThis.
     * @example
     * // Create many MonThis
     * const monThi = await prisma.monThi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonThiCreateManyArgs>(args?: SelectSubset<T, MonThiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonThis and returns the data saved in the database.
     * @param {MonThiCreateManyAndReturnArgs} args - Arguments to create many MonThis.
     * @example
     * // Create many MonThis
     * const monThi = await prisma.monThi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonThis and only return the `id`
     * const monThiWithIdOnly = await prisma.monThi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonThiCreateManyAndReturnArgs>(args?: SelectSubset<T, MonThiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonThi.
     * @param {MonThiDeleteArgs} args - Arguments to delete one MonThi.
     * @example
     * // Delete one MonThi
     * const MonThi = await prisma.monThi.delete({
     *   where: {
     *     // ... filter to delete one MonThi
     *   }
     * })
     * 
     */
    delete<T extends MonThiDeleteArgs>(args: SelectSubset<T, MonThiDeleteArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonThi.
     * @param {MonThiUpdateArgs} args - Arguments to update one MonThi.
     * @example
     * // Update one MonThi
     * const monThi = await prisma.monThi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonThiUpdateArgs>(args: SelectSubset<T, MonThiUpdateArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonThis.
     * @param {MonThiDeleteManyArgs} args - Arguments to filter MonThis to delete.
     * @example
     * // Delete a few MonThis
     * const { count } = await prisma.monThi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonThiDeleteManyArgs>(args?: SelectSubset<T, MonThiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonThis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonThiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonThis
     * const monThi = await prisma.monThi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonThiUpdateManyArgs>(args: SelectSubset<T, MonThiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonThis and returns the data updated in the database.
     * @param {MonThiUpdateManyAndReturnArgs} args - Arguments to update many MonThis.
     * @example
     * // Update many MonThis
     * const monThi = await prisma.monThi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonThis and only return the `id`
     * const monThiWithIdOnly = await prisma.monThi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonThiUpdateManyAndReturnArgs>(args: SelectSubset<T, MonThiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonThi.
     * @param {MonThiUpsertArgs} args - Arguments to update or create a MonThi.
     * @example
     * // Update or create a MonThi
     * const monThi = await prisma.monThi.upsert({
     *   create: {
     *     // ... data to create a MonThi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonThi we want to update
     *   }
     * })
     */
    upsert<T extends MonThiUpsertArgs>(args: SelectSubset<T, MonThiUpsertArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonThis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonThiCountArgs} args - Arguments to filter MonThis to count.
     * @example
     * // Count the number of MonThis
     * const count = await prisma.monThi.count({
     *   where: {
     *     // ... the filter for the MonThis we want to count
     *   }
     * })
    **/
    count<T extends MonThiCountArgs>(
      args?: Subset<T, MonThiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonThiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonThi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonThiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonThiAggregateArgs>(args: Subset<T, MonThiAggregateArgs>): Prisma.PrismaPromise<GetMonThiAggregateType<T>>

    /**
     * Group by MonThi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonThiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonThiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonThiGroupByArgs['orderBy'] }
        : { orderBy?: MonThiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonThiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonThiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonThi model
   */
  readonly fields: MonThiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonThi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonThiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diemThis<T extends MonThi$diemThisArgs<ExtArgs> = {}>(args?: Subset<T, MonThi$diemThisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonThi model
   */
  interface MonThiFieldRefs {
    readonly id: FieldRef<"MonThi", 'Int'>
    readonly maMon: FieldRef<"MonThi", 'String'>
    readonly tenMon: FieldRef<"MonThi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MonThi findUnique
   */
  export type MonThiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * Filter, which MonThi to fetch.
     */
    where: MonThiWhereUniqueInput
  }

  /**
   * MonThi findUniqueOrThrow
   */
  export type MonThiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * Filter, which MonThi to fetch.
     */
    where: MonThiWhereUniqueInput
  }

  /**
   * MonThi findFirst
   */
  export type MonThiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * Filter, which MonThi to fetch.
     */
    where?: MonThiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonThis to fetch.
     */
    orderBy?: MonThiOrderByWithRelationInput | MonThiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonThis.
     */
    cursor?: MonThiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonThis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonThis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonThis.
     */
    distinct?: MonThiScalarFieldEnum | MonThiScalarFieldEnum[]
  }

  /**
   * MonThi findFirstOrThrow
   */
  export type MonThiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * Filter, which MonThi to fetch.
     */
    where?: MonThiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonThis to fetch.
     */
    orderBy?: MonThiOrderByWithRelationInput | MonThiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonThis.
     */
    cursor?: MonThiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonThis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonThis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonThis.
     */
    distinct?: MonThiScalarFieldEnum | MonThiScalarFieldEnum[]
  }

  /**
   * MonThi findMany
   */
  export type MonThiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * Filter, which MonThis to fetch.
     */
    where?: MonThiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonThis to fetch.
     */
    orderBy?: MonThiOrderByWithRelationInput | MonThiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonThis.
     */
    cursor?: MonThiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonThis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonThis.
     */
    skip?: number
    distinct?: MonThiScalarFieldEnum | MonThiScalarFieldEnum[]
  }

  /**
   * MonThi create
   */
  export type MonThiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * The data needed to create a MonThi.
     */
    data: XOR<MonThiCreateInput, MonThiUncheckedCreateInput>
  }

  /**
   * MonThi createMany
   */
  export type MonThiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonThis.
     */
    data: MonThiCreateManyInput | MonThiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonThi createManyAndReturn
   */
  export type MonThiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * The data used to create many MonThis.
     */
    data: MonThiCreateManyInput | MonThiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonThi update
   */
  export type MonThiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * The data needed to update a MonThi.
     */
    data: XOR<MonThiUpdateInput, MonThiUncheckedUpdateInput>
    /**
     * Choose, which MonThi to update.
     */
    where: MonThiWhereUniqueInput
  }

  /**
   * MonThi updateMany
   */
  export type MonThiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonThis.
     */
    data: XOR<MonThiUpdateManyMutationInput, MonThiUncheckedUpdateManyInput>
    /**
     * Filter which MonThis to update
     */
    where?: MonThiWhereInput
    /**
     * Limit how many MonThis to update.
     */
    limit?: number
  }

  /**
   * MonThi updateManyAndReturn
   */
  export type MonThiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * The data used to update MonThis.
     */
    data: XOR<MonThiUpdateManyMutationInput, MonThiUncheckedUpdateManyInput>
    /**
     * Filter which MonThis to update
     */
    where?: MonThiWhereInput
    /**
     * Limit how many MonThis to update.
     */
    limit?: number
  }

  /**
   * MonThi upsert
   */
  export type MonThiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * The filter to search for the MonThi to update in case it exists.
     */
    where: MonThiWhereUniqueInput
    /**
     * In case the MonThi found by the `where` argument doesn't exist, create a new MonThi with this data.
     */
    create: XOR<MonThiCreateInput, MonThiUncheckedCreateInput>
    /**
     * In case the MonThi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonThiUpdateInput, MonThiUncheckedUpdateInput>
  }

  /**
   * MonThi delete
   */
  export type MonThiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
    /**
     * Filter which MonThi to delete.
     */
    where: MonThiWhereUniqueInput
  }

  /**
   * MonThi deleteMany
   */
  export type MonThiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonThis to delete
     */
    where?: MonThiWhereInput
    /**
     * Limit how many MonThis to delete.
     */
    limit?: number
  }

  /**
   * MonThi.diemThis
   */
  export type MonThi$diemThisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    where?: DiemThiWhereInput
    orderBy?: DiemThiOrderByWithRelationInput | DiemThiOrderByWithRelationInput[]
    cursor?: DiemThiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiemThiScalarFieldEnum | DiemThiScalarFieldEnum[]
  }

  /**
   * MonThi without action
   */
  export type MonThiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonThi
     */
    select?: MonThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonThi
     */
    omit?: MonThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonThiInclude<ExtArgs> | null
  }


  /**
   * Model DiemThi
   */

  export type AggregateDiemThi = {
    _count: DiemThiCountAggregateOutputType | null
    _avg: DiemThiAvgAggregateOutputType | null
    _sum: DiemThiSumAggregateOutputType | null
    _min: DiemThiMinAggregateOutputType | null
    _max: DiemThiMaxAggregateOutputType | null
  }

  export type DiemThiAvgAggregateOutputType = {
    id: number | null
    diem: number | null
  }

  export type DiemThiSumAggregateOutputType = {
    id: number | null
    diem: number | null
  }

  export type DiemThiMinAggregateOutputType = {
    id: number | null
    sbd: string | null
    maMon: string | null
    diem: number | null
    maNgoaiNgu: string | null
  }

  export type DiemThiMaxAggregateOutputType = {
    id: number | null
    sbd: string | null
    maMon: string | null
    diem: number | null
    maNgoaiNgu: string | null
  }

  export type DiemThiCountAggregateOutputType = {
    id: number
    sbd: number
    maMon: number
    diem: number
    maNgoaiNgu: number
    _all: number
  }


  export type DiemThiAvgAggregateInputType = {
    id?: true
    diem?: true
  }

  export type DiemThiSumAggregateInputType = {
    id?: true
    diem?: true
  }

  export type DiemThiMinAggregateInputType = {
    id?: true
    sbd?: true
    maMon?: true
    diem?: true
    maNgoaiNgu?: true
  }

  export type DiemThiMaxAggregateInputType = {
    id?: true
    sbd?: true
    maMon?: true
    diem?: true
    maNgoaiNgu?: true
  }

  export type DiemThiCountAggregateInputType = {
    id?: true
    sbd?: true
    maMon?: true
    diem?: true
    maNgoaiNgu?: true
    _all?: true
  }

  export type DiemThiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiemThi to aggregate.
     */
    where?: DiemThiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiemThis to fetch.
     */
    orderBy?: DiemThiOrderByWithRelationInput | DiemThiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiemThiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiemThis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiemThis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiemThis
    **/
    _count?: true | DiemThiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiemThiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiemThiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiemThiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiemThiMaxAggregateInputType
  }

  export type GetDiemThiAggregateType<T extends DiemThiAggregateArgs> = {
        [P in keyof T & keyof AggregateDiemThi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiemThi[P]>
      : GetScalarType<T[P], AggregateDiemThi[P]>
  }




  export type DiemThiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiemThiWhereInput
    orderBy?: DiemThiOrderByWithAggregationInput | DiemThiOrderByWithAggregationInput[]
    by: DiemThiScalarFieldEnum[] | DiemThiScalarFieldEnum
    having?: DiemThiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiemThiCountAggregateInputType | true
    _avg?: DiemThiAvgAggregateInputType
    _sum?: DiemThiSumAggregateInputType
    _min?: DiemThiMinAggregateInputType
    _max?: DiemThiMaxAggregateInputType
  }

  export type DiemThiGroupByOutputType = {
    id: number
    sbd: string
    maMon: string
    diem: number
    maNgoaiNgu: string | null
    _count: DiemThiCountAggregateOutputType | null
    _avg: DiemThiAvgAggregateOutputType | null
    _sum: DiemThiSumAggregateOutputType | null
    _min: DiemThiMinAggregateOutputType | null
    _max: DiemThiMaxAggregateOutputType | null
  }

  type GetDiemThiGroupByPayload<T extends DiemThiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiemThiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiemThiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiemThiGroupByOutputType[P]>
            : GetScalarType<T[P], DiemThiGroupByOutputType[P]>
        }
      >
    >


  export type DiemThiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sbd?: boolean
    maMon?: boolean
    diem?: boolean
    maNgoaiNgu?: boolean
    thiSinh?: boolean | ThiSinhDefaultArgs<ExtArgs>
    monThi?: boolean | MonThiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diemThi"]>

  export type DiemThiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sbd?: boolean
    maMon?: boolean
    diem?: boolean
    maNgoaiNgu?: boolean
    thiSinh?: boolean | ThiSinhDefaultArgs<ExtArgs>
    monThi?: boolean | MonThiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diemThi"]>

  export type DiemThiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sbd?: boolean
    maMon?: boolean
    diem?: boolean
    maNgoaiNgu?: boolean
    thiSinh?: boolean | ThiSinhDefaultArgs<ExtArgs>
    monThi?: boolean | MonThiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diemThi"]>

  export type DiemThiSelectScalar = {
    id?: boolean
    sbd?: boolean
    maMon?: boolean
    diem?: boolean
    maNgoaiNgu?: boolean
  }

  export type DiemThiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sbd" | "maMon" | "diem" | "maNgoaiNgu", ExtArgs["result"]["diemThi"]>
  export type DiemThiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thiSinh?: boolean | ThiSinhDefaultArgs<ExtArgs>
    monThi?: boolean | MonThiDefaultArgs<ExtArgs>
  }
  export type DiemThiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thiSinh?: boolean | ThiSinhDefaultArgs<ExtArgs>
    monThi?: boolean | MonThiDefaultArgs<ExtArgs>
  }
  export type DiemThiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thiSinh?: boolean | ThiSinhDefaultArgs<ExtArgs>
    monThi?: boolean | MonThiDefaultArgs<ExtArgs>
  }

  export type $DiemThiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiemThi"
    objects: {
      thiSinh: Prisma.$ThiSinhPayload<ExtArgs>
      monThi: Prisma.$MonThiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sbd: string
      maMon: string
      diem: number
      maNgoaiNgu: string | null
    }, ExtArgs["result"]["diemThi"]>
    composites: {}
  }

  type DiemThiGetPayload<S extends boolean | null | undefined | DiemThiDefaultArgs> = $Result.GetResult<Prisma.$DiemThiPayload, S>

  type DiemThiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiemThiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiemThiCountAggregateInputType | true
    }

  export interface DiemThiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiemThi'], meta: { name: 'DiemThi' } }
    /**
     * Find zero or one DiemThi that matches the filter.
     * @param {DiemThiFindUniqueArgs} args - Arguments to find a DiemThi
     * @example
     * // Get one DiemThi
     * const diemThi = await prisma.diemThi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiemThiFindUniqueArgs>(args: SelectSubset<T, DiemThiFindUniqueArgs<ExtArgs>>): Prisma__DiemThiClient<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiemThi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiemThiFindUniqueOrThrowArgs} args - Arguments to find a DiemThi
     * @example
     * // Get one DiemThi
     * const diemThi = await prisma.diemThi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiemThiFindUniqueOrThrowArgs>(args: SelectSubset<T, DiemThiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiemThiClient<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiemThi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiemThiFindFirstArgs} args - Arguments to find a DiemThi
     * @example
     * // Get one DiemThi
     * const diemThi = await prisma.diemThi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiemThiFindFirstArgs>(args?: SelectSubset<T, DiemThiFindFirstArgs<ExtArgs>>): Prisma__DiemThiClient<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiemThi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiemThiFindFirstOrThrowArgs} args - Arguments to find a DiemThi
     * @example
     * // Get one DiemThi
     * const diemThi = await prisma.diemThi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiemThiFindFirstOrThrowArgs>(args?: SelectSubset<T, DiemThiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiemThiClient<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiemThis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiemThiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiemThis
     * const diemThis = await prisma.diemThi.findMany()
     * 
     * // Get first 10 DiemThis
     * const diemThis = await prisma.diemThi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diemThiWithIdOnly = await prisma.diemThi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiemThiFindManyArgs>(args?: SelectSubset<T, DiemThiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiemThi.
     * @param {DiemThiCreateArgs} args - Arguments to create a DiemThi.
     * @example
     * // Create one DiemThi
     * const DiemThi = await prisma.diemThi.create({
     *   data: {
     *     // ... data to create a DiemThi
     *   }
     * })
     * 
     */
    create<T extends DiemThiCreateArgs>(args: SelectSubset<T, DiemThiCreateArgs<ExtArgs>>): Prisma__DiemThiClient<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiemThis.
     * @param {DiemThiCreateManyArgs} args - Arguments to create many DiemThis.
     * @example
     * // Create many DiemThis
     * const diemThi = await prisma.diemThi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiemThiCreateManyArgs>(args?: SelectSubset<T, DiemThiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiemThis and returns the data saved in the database.
     * @param {DiemThiCreateManyAndReturnArgs} args - Arguments to create many DiemThis.
     * @example
     * // Create many DiemThis
     * const diemThi = await prisma.diemThi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiemThis and only return the `id`
     * const diemThiWithIdOnly = await prisma.diemThi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiemThiCreateManyAndReturnArgs>(args?: SelectSubset<T, DiemThiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiemThi.
     * @param {DiemThiDeleteArgs} args - Arguments to delete one DiemThi.
     * @example
     * // Delete one DiemThi
     * const DiemThi = await prisma.diemThi.delete({
     *   where: {
     *     // ... filter to delete one DiemThi
     *   }
     * })
     * 
     */
    delete<T extends DiemThiDeleteArgs>(args: SelectSubset<T, DiemThiDeleteArgs<ExtArgs>>): Prisma__DiemThiClient<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiemThi.
     * @param {DiemThiUpdateArgs} args - Arguments to update one DiemThi.
     * @example
     * // Update one DiemThi
     * const diemThi = await prisma.diemThi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiemThiUpdateArgs>(args: SelectSubset<T, DiemThiUpdateArgs<ExtArgs>>): Prisma__DiemThiClient<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiemThis.
     * @param {DiemThiDeleteManyArgs} args - Arguments to filter DiemThis to delete.
     * @example
     * // Delete a few DiemThis
     * const { count } = await prisma.diemThi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiemThiDeleteManyArgs>(args?: SelectSubset<T, DiemThiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiemThis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiemThiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiemThis
     * const diemThi = await prisma.diemThi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiemThiUpdateManyArgs>(args: SelectSubset<T, DiemThiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiemThis and returns the data updated in the database.
     * @param {DiemThiUpdateManyAndReturnArgs} args - Arguments to update many DiemThis.
     * @example
     * // Update many DiemThis
     * const diemThi = await prisma.diemThi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiemThis and only return the `id`
     * const diemThiWithIdOnly = await prisma.diemThi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiemThiUpdateManyAndReturnArgs>(args: SelectSubset<T, DiemThiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiemThi.
     * @param {DiemThiUpsertArgs} args - Arguments to update or create a DiemThi.
     * @example
     * // Update or create a DiemThi
     * const diemThi = await prisma.diemThi.upsert({
     *   create: {
     *     // ... data to create a DiemThi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiemThi we want to update
     *   }
     * })
     */
    upsert<T extends DiemThiUpsertArgs>(args: SelectSubset<T, DiemThiUpsertArgs<ExtArgs>>): Prisma__DiemThiClient<$Result.GetResult<Prisma.$DiemThiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiemThis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiemThiCountArgs} args - Arguments to filter DiemThis to count.
     * @example
     * // Count the number of DiemThis
     * const count = await prisma.diemThi.count({
     *   where: {
     *     // ... the filter for the DiemThis we want to count
     *   }
     * })
    **/
    count<T extends DiemThiCountArgs>(
      args?: Subset<T, DiemThiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiemThiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiemThi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiemThiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiemThiAggregateArgs>(args: Subset<T, DiemThiAggregateArgs>): Prisma.PrismaPromise<GetDiemThiAggregateType<T>>

    /**
     * Group by DiemThi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiemThiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiemThiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiemThiGroupByArgs['orderBy'] }
        : { orderBy?: DiemThiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiemThiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiemThiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiemThi model
   */
  readonly fields: DiemThiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiemThi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiemThiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thiSinh<T extends ThiSinhDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThiSinhDefaultArgs<ExtArgs>>): Prisma__ThiSinhClient<$Result.GetResult<Prisma.$ThiSinhPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    monThi<T extends MonThiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonThiDefaultArgs<ExtArgs>>): Prisma__MonThiClient<$Result.GetResult<Prisma.$MonThiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiemThi model
   */
  interface DiemThiFieldRefs {
    readonly id: FieldRef<"DiemThi", 'Int'>
    readonly sbd: FieldRef<"DiemThi", 'String'>
    readonly maMon: FieldRef<"DiemThi", 'String'>
    readonly diem: FieldRef<"DiemThi", 'Float'>
    readonly maNgoaiNgu: FieldRef<"DiemThi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiemThi findUnique
   */
  export type DiemThiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * Filter, which DiemThi to fetch.
     */
    where: DiemThiWhereUniqueInput
  }

  /**
   * DiemThi findUniqueOrThrow
   */
  export type DiemThiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * Filter, which DiemThi to fetch.
     */
    where: DiemThiWhereUniqueInput
  }

  /**
   * DiemThi findFirst
   */
  export type DiemThiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * Filter, which DiemThi to fetch.
     */
    where?: DiemThiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiemThis to fetch.
     */
    orderBy?: DiemThiOrderByWithRelationInput | DiemThiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiemThis.
     */
    cursor?: DiemThiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiemThis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiemThis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiemThis.
     */
    distinct?: DiemThiScalarFieldEnum | DiemThiScalarFieldEnum[]
  }

  /**
   * DiemThi findFirstOrThrow
   */
  export type DiemThiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * Filter, which DiemThi to fetch.
     */
    where?: DiemThiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiemThis to fetch.
     */
    orderBy?: DiemThiOrderByWithRelationInput | DiemThiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiemThis.
     */
    cursor?: DiemThiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiemThis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiemThis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiemThis.
     */
    distinct?: DiemThiScalarFieldEnum | DiemThiScalarFieldEnum[]
  }

  /**
   * DiemThi findMany
   */
  export type DiemThiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * Filter, which DiemThis to fetch.
     */
    where?: DiemThiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiemThis to fetch.
     */
    orderBy?: DiemThiOrderByWithRelationInput | DiemThiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiemThis.
     */
    cursor?: DiemThiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiemThis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiemThis.
     */
    skip?: number
    distinct?: DiemThiScalarFieldEnum | DiemThiScalarFieldEnum[]
  }

  /**
   * DiemThi create
   */
  export type DiemThiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * The data needed to create a DiemThi.
     */
    data: XOR<DiemThiCreateInput, DiemThiUncheckedCreateInput>
  }

  /**
   * DiemThi createMany
   */
  export type DiemThiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiemThis.
     */
    data: DiemThiCreateManyInput | DiemThiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiemThi createManyAndReturn
   */
  export type DiemThiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * The data used to create many DiemThis.
     */
    data: DiemThiCreateManyInput | DiemThiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiemThi update
   */
  export type DiemThiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * The data needed to update a DiemThi.
     */
    data: XOR<DiemThiUpdateInput, DiemThiUncheckedUpdateInput>
    /**
     * Choose, which DiemThi to update.
     */
    where: DiemThiWhereUniqueInput
  }

  /**
   * DiemThi updateMany
   */
  export type DiemThiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiemThis.
     */
    data: XOR<DiemThiUpdateManyMutationInput, DiemThiUncheckedUpdateManyInput>
    /**
     * Filter which DiemThis to update
     */
    where?: DiemThiWhereInput
    /**
     * Limit how many DiemThis to update.
     */
    limit?: number
  }

  /**
   * DiemThi updateManyAndReturn
   */
  export type DiemThiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * The data used to update DiemThis.
     */
    data: XOR<DiemThiUpdateManyMutationInput, DiemThiUncheckedUpdateManyInput>
    /**
     * Filter which DiemThis to update
     */
    where?: DiemThiWhereInput
    /**
     * Limit how many DiemThis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiemThi upsert
   */
  export type DiemThiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * The filter to search for the DiemThi to update in case it exists.
     */
    where: DiemThiWhereUniqueInput
    /**
     * In case the DiemThi found by the `where` argument doesn't exist, create a new DiemThi with this data.
     */
    create: XOR<DiemThiCreateInput, DiemThiUncheckedCreateInput>
    /**
     * In case the DiemThi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiemThiUpdateInput, DiemThiUncheckedUpdateInput>
  }

  /**
   * DiemThi delete
   */
  export type DiemThiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
    /**
     * Filter which DiemThi to delete.
     */
    where: DiemThiWhereUniqueInput
  }

  /**
   * DiemThi deleteMany
   */
  export type DiemThiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiemThis to delete
     */
    where?: DiemThiWhereInput
    /**
     * Limit how many DiemThis to delete.
     */
    limit?: number
  }

  /**
   * DiemThi without action
   */
  export type DiemThiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiemThi
     */
    select?: DiemThiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiemThi
     */
    omit?: DiemThiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiemThiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ThiSinhScalarFieldEnum: {
    sbd: 'sbd'
  };

  export type ThiSinhScalarFieldEnum = (typeof ThiSinhScalarFieldEnum)[keyof typeof ThiSinhScalarFieldEnum]


  export const MonThiScalarFieldEnum: {
    id: 'id',
    maMon: 'maMon',
    tenMon: 'tenMon'
  };

  export type MonThiScalarFieldEnum = (typeof MonThiScalarFieldEnum)[keyof typeof MonThiScalarFieldEnum]


  export const DiemThiScalarFieldEnum: {
    id: 'id',
    sbd: 'sbd',
    maMon: 'maMon',
    diem: 'diem',
    maNgoaiNgu: 'maNgoaiNgu'
  };

  export type DiemThiScalarFieldEnum = (typeof DiemThiScalarFieldEnum)[keyof typeof DiemThiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ThiSinhWhereInput = {
    AND?: ThiSinhWhereInput | ThiSinhWhereInput[]
    OR?: ThiSinhWhereInput[]
    NOT?: ThiSinhWhereInput | ThiSinhWhereInput[]
    sbd?: StringFilter<"ThiSinh"> | string
    diemThis?: DiemThiListRelationFilter
  }

  export type ThiSinhOrderByWithRelationInput = {
    sbd?: SortOrder
    diemThis?: DiemThiOrderByRelationAggregateInput
  }

  export type ThiSinhWhereUniqueInput = Prisma.AtLeast<{
    sbd?: string
    AND?: ThiSinhWhereInput | ThiSinhWhereInput[]
    OR?: ThiSinhWhereInput[]
    NOT?: ThiSinhWhereInput | ThiSinhWhereInput[]
    diemThis?: DiemThiListRelationFilter
  }, "sbd">

  export type ThiSinhOrderByWithAggregationInput = {
    sbd?: SortOrder
    _count?: ThiSinhCountOrderByAggregateInput
    _max?: ThiSinhMaxOrderByAggregateInput
    _min?: ThiSinhMinOrderByAggregateInput
  }

  export type ThiSinhScalarWhereWithAggregatesInput = {
    AND?: ThiSinhScalarWhereWithAggregatesInput | ThiSinhScalarWhereWithAggregatesInput[]
    OR?: ThiSinhScalarWhereWithAggregatesInput[]
    NOT?: ThiSinhScalarWhereWithAggregatesInput | ThiSinhScalarWhereWithAggregatesInput[]
    sbd?: StringWithAggregatesFilter<"ThiSinh"> | string
  }

  export type MonThiWhereInput = {
    AND?: MonThiWhereInput | MonThiWhereInput[]
    OR?: MonThiWhereInput[]
    NOT?: MonThiWhereInput | MonThiWhereInput[]
    id?: IntFilter<"MonThi"> | number
    maMon?: StringFilter<"MonThi"> | string
    tenMon?: StringFilter<"MonThi"> | string
    diemThis?: DiemThiListRelationFilter
  }

  export type MonThiOrderByWithRelationInput = {
    id?: SortOrder
    maMon?: SortOrder
    tenMon?: SortOrder
    diemThis?: DiemThiOrderByRelationAggregateInput
  }

  export type MonThiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    maMon?: string
    AND?: MonThiWhereInput | MonThiWhereInput[]
    OR?: MonThiWhereInput[]
    NOT?: MonThiWhereInput | MonThiWhereInput[]
    tenMon?: StringFilter<"MonThi"> | string
    diemThis?: DiemThiListRelationFilter
  }, "id" | "maMon">

  export type MonThiOrderByWithAggregationInput = {
    id?: SortOrder
    maMon?: SortOrder
    tenMon?: SortOrder
    _count?: MonThiCountOrderByAggregateInput
    _avg?: MonThiAvgOrderByAggregateInput
    _max?: MonThiMaxOrderByAggregateInput
    _min?: MonThiMinOrderByAggregateInput
    _sum?: MonThiSumOrderByAggregateInput
  }

  export type MonThiScalarWhereWithAggregatesInput = {
    AND?: MonThiScalarWhereWithAggregatesInput | MonThiScalarWhereWithAggregatesInput[]
    OR?: MonThiScalarWhereWithAggregatesInput[]
    NOT?: MonThiScalarWhereWithAggregatesInput | MonThiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonThi"> | number
    maMon?: StringWithAggregatesFilter<"MonThi"> | string
    tenMon?: StringWithAggregatesFilter<"MonThi"> | string
  }

  export type DiemThiWhereInput = {
    AND?: DiemThiWhereInput | DiemThiWhereInput[]
    OR?: DiemThiWhereInput[]
    NOT?: DiemThiWhereInput | DiemThiWhereInput[]
    id?: IntFilter<"DiemThi"> | number
    sbd?: StringFilter<"DiemThi"> | string
    maMon?: StringFilter<"DiemThi"> | string
    diem?: FloatFilter<"DiemThi"> | number
    maNgoaiNgu?: StringNullableFilter<"DiemThi"> | string | null
    thiSinh?: XOR<ThiSinhScalarRelationFilter, ThiSinhWhereInput>
    monThi?: XOR<MonThiScalarRelationFilter, MonThiWhereInput>
  }

  export type DiemThiOrderByWithRelationInput = {
    id?: SortOrder
    sbd?: SortOrder
    maMon?: SortOrder
    diem?: SortOrder
    maNgoaiNgu?: SortOrderInput | SortOrder
    thiSinh?: ThiSinhOrderByWithRelationInput
    monThi?: MonThiOrderByWithRelationInput
  }

  export type DiemThiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiemThiWhereInput | DiemThiWhereInput[]
    OR?: DiemThiWhereInput[]
    NOT?: DiemThiWhereInput | DiemThiWhereInput[]
    sbd?: StringFilter<"DiemThi"> | string
    maMon?: StringFilter<"DiemThi"> | string
    diem?: FloatFilter<"DiemThi"> | number
    maNgoaiNgu?: StringNullableFilter<"DiemThi"> | string | null
    thiSinh?: XOR<ThiSinhScalarRelationFilter, ThiSinhWhereInput>
    monThi?: XOR<MonThiScalarRelationFilter, MonThiWhereInput>
  }, "id">

  export type DiemThiOrderByWithAggregationInput = {
    id?: SortOrder
    sbd?: SortOrder
    maMon?: SortOrder
    diem?: SortOrder
    maNgoaiNgu?: SortOrderInput | SortOrder
    _count?: DiemThiCountOrderByAggregateInput
    _avg?: DiemThiAvgOrderByAggregateInput
    _max?: DiemThiMaxOrderByAggregateInput
    _min?: DiemThiMinOrderByAggregateInput
    _sum?: DiemThiSumOrderByAggregateInput
  }

  export type DiemThiScalarWhereWithAggregatesInput = {
    AND?: DiemThiScalarWhereWithAggregatesInput | DiemThiScalarWhereWithAggregatesInput[]
    OR?: DiemThiScalarWhereWithAggregatesInput[]
    NOT?: DiemThiScalarWhereWithAggregatesInput | DiemThiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiemThi"> | number
    sbd?: StringWithAggregatesFilter<"DiemThi"> | string
    maMon?: StringWithAggregatesFilter<"DiemThi"> | string
    diem?: FloatWithAggregatesFilter<"DiemThi"> | number
    maNgoaiNgu?: StringNullableWithAggregatesFilter<"DiemThi"> | string | null
  }

  export type ThiSinhCreateInput = {
    sbd: string
    diemThis?: DiemThiCreateNestedManyWithoutThiSinhInput
  }

  export type ThiSinhUncheckedCreateInput = {
    sbd: string
    diemThis?: DiemThiUncheckedCreateNestedManyWithoutThiSinhInput
  }

  export type ThiSinhUpdateInput = {
    sbd?: StringFieldUpdateOperationsInput | string
    diemThis?: DiemThiUpdateManyWithoutThiSinhNestedInput
  }

  export type ThiSinhUncheckedUpdateInput = {
    sbd?: StringFieldUpdateOperationsInput | string
    diemThis?: DiemThiUncheckedUpdateManyWithoutThiSinhNestedInput
  }

  export type ThiSinhCreateManyInput = {
    sbd: string
  }

  export type ThiSinhUpdateManyMutationInput = {
    sbd?: StringFieldUpdateOperationsInput | string
  }

  export type ThiSinhUncheckedUpdateManyInput = {
    sbd?: StringFieldUpdateOperationsInput | string
  }

  export type MonThiCreateInput = {
    maMon: string
    tenMon: string
    diemThis?: DiemThiCreateNestedManyWithoutMonThiInput
  }

  export type MonThiUncheckedCreateInput = {
    id?: number
    maMon: string
    tenMon: string
    diemThis?: DiemThiUncheckedCreateNestedManyWithoutMonThiInput
  }

  export type MonThiUpdateInput = {
    maMon?: StringFieldUpdateOperationsInput | string
    tenMon?: StringFieldUpdateOperationsInput | string
    diemThis?: DiemThiUpdateManyWithoutMonThiNestedInput
  }

  export type MonThiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    maMon?: StringFieldUpdateOperationsInput | string
    tenMon?: StringFieldUpdateOperationsInput | string
    diemThis?: DiemThiUncheckedUpdateManyWithoutMonThiNestedInput
  }

  export type MonThiCreateManyInput = {
    id?: number
    maMon: string
    tenMon: string
  }

  export type MonThiUpdateManyMutationInput = {
    maMon?: StringFieldUpdateOperationsInput | string
    tenMon?: StringFieldUpdateOperationsInput | string
  }

  export type MonThiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    maMon?: StringFieldUpdateOperationsInput | string
    tenMon?: StringFieldUpdateOperationsInput | string
  }

  export type DiemThiCreateInput = {
    diem: number
    maNgoaiNgu?: string | null
    thiSinh: ThiSinhCreateNestedOneWithoutDiemThisInput
    monThi: MonThiCreateNestedOneWithoutDiemThisInput
  }

  export type DiemThiUncheckedCreateInput = {
    id?: number
    sbd: string
    maMon: string
    diem: number
    maNgoaiNgu?: string | null
  }

  export type DiemThiUpdateInput = {
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
    thiSinh?: ThiSinhUpdateOneRequiredWithoutDiemThisNestedInput
    monThi?: MonThiUpdateOneRequiredWithoutDiemThisNestedInput
  }

  export type DiemThiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sbd?: StringFieldUpdateOperationsInput | string
    maMon?: StringFieldUpdateOperationsInput | string
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiemThiCreateManyInput = {
    id?: number
    sbd: string
    maMon: string
    diem: number
    maNgoaiNgu?: string | null
  }

  export type DiemThiUpdateManyMutationInput = {
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiemThiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sbd?: StringFieldUpdateOperationsInput | string
    maMon?: StringFieldUpdateOperationsInput | string
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DiemThiListRelationFilter = {
    every?: DiemThiWhereInput
    some?: DiemThiWhereInput
    none?: DiemThiWhereInput
  }

  export type DiemThiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThiSinhCountOrderByAggregateInput = {
    sbd?: SortOrder
  }

  export type ThiSinhMaxOrderByAggregateInput = {
    sbd?: SortOrder
  }

  export type ThiSinhMinOrderByAggregateInput = {
    sbd?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MonThiCountOrderByAggregateInput = {
    id?: SortOrder
    maMon?: SortOrder
    tenMon?: SortOrder
  }

  export type MonThiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonThiMaxOrderByAggregateInput = {
    id?: SortOrder
    maMon?: SortOrder
    tenMon?: SortOrder
  }

  export type MonThiMinOrderByAggregateInput = {
    id?: SortOrder
    maMon?: SortOrder
    tenMon?: SortOrder
  }

  export type MonThiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ThiSinhScalarRelationFilter = {
    is?: ThiSinhWhereInput
    isNot?: ThiSinhWhereInput
  }

  export type MonThiScalarRelationFilter = {
    is?: MonThiWhereInput
    isNot?: MonThiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiemThiCountOrderByAggregateInput = {
    id?: SortOrder
    sbd?: SortOrder
    maMon?: SortOrder
    diem?: SortOrder
    maNgoaiNgu?: SortOrder
  }

  export type DiemThiAvgOrderByAggregateInput = {
    id?: SortOrder
    diem?: SortOrder
  }

  export type DiemThiMaxOrderByAggregateInput = {
    id?: SortOrder
    sbd?: SortOrder
    maMon?: SortOrder
    diem?: SortOrder
    maNgoaiNgu?: SortOrder
  }

  export type DiemThiMinOrderByAggregateInput = {
    id?: SortOrder
    sbd?: SortOrder
    maMon?: SortOrder
    diem?: SortOrder
    maNgoaiNgu?: SortOrder
  }

  export type DiemThiSumOrderByAggregateInput = {
    id?: SortOrder
    diem?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DiemThiCreateNestedManyWithoutThiSinhInput = {
    create?: XOR<DiemThiCreateWithoutThiSinhInput, DiemThiUncheckedCreateWithoutThiSinhInput> | DiemThiCreateWithoutThiSinhInput[] | DiemThiUncheckedCreateWithoutThiSinhInput[]
    connectOrCreate?: DiemThiCreateOrConnectWithoutThiSinhInput | DiemThiCreateOrConnectWithoutThiSinhInput[]
    createMany?: DiemThiCreateManyThiSinhInputEnvelope
    connect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
  }

  export type DiemThiUncheckedCreateNestedManyWithoutThiSinhInput = {
    create?: XOR<DiemThiCreateWithoutThiSinhInput, DiemThiUncheckedCreateWithoutThiSinhInput> | DiemThiCreateWithoutThiSinhInput[] | DiemThiUncheckedCreateWithoutThiSinhInput[]
    connectOrCreate?: DiemThiCreateOrConnectWithoutThiSinhInput | DiemThiCreateOrConnectWithoutThiSinhInput[]
    createMany?: DiemThiCreateManyThiSinhInputEnvelope
    connect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DiemThiUpdateManyWithoutThiSinhNestedInput = {
    create?: XOR<DiemThiCreateWithoutThiSinhInput, DiemThiUncheckedCreateWithoutThiSinhInput> | DiemThiCreateWithoutThiSinhInput[] | DiemThiUncheckedCreateWithoutThiSinhInput[]
    connectOrCreate?: DiemThiCreateOrConnectWithoutThiSinhInput | DiemThiCreateOrConnectWithoutThiSinhInput[]
    upsert?: DiemThiUpsertWithWhereUniqueWithoutThiSinhInput | DiemThiUpsertWithWhereUniqueWithoutThiSinhInput[]
    createMany?: DiemThiCreateManyThiSinhInputEnvelope
    set?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    disconnect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    delete?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    connect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    update?: DiemThiUpdateWithWhereUniqueWithoutThiSinhInput | DiemThiUpdateWithWhereUniqueWithoutThiSinhInput[]
    updateMany?: DiemThiUpdateManyWithWhereWithoutThiSinhInput | DiemThiUpdateManyWithWhereWithoutThiSinhInput[]
    deleteMany?: DiemThiScalarWhereInput | DiemThiScalarWhereInput[]
  }

  export type DiemThiUncheckedUpdateManyWithoutThiSinhNestedInput = {
    create?: XOR<DiemThiCreateWithoutThiSinhInput, DiemThiUncheckedCreateWithoutThiSinhInput> | DiemThiCreateWithoutThiSinhInput[] | DiemThiUncheckedCreateWithoutThiSinhInput[]
    connectOrCreate?: DiemThiCreateOrConnectWithoutThiSinhInput | DiemThiCreateOrConnectWithoutThiSinhInput[]
    upsert?: DiemThiUpsertWithWhereUniqueWithoutThiSinhInput | DiemThiUpsertWithWhereUniqueWithoutThiSinhInput[]
    createMany?: DiemThiCreateManyThiSinhInputEnvelope
    set?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    disconnect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    delete?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    connect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    update?: DiemThiUpdateWithWhereUniqueWithoutThiSinhInput | DiemThiUpdateWithWhereUniqueWithoutThiSinhInput[]
    updateMany?: DiemThiUpdateManyWithWhereWithoutThiSinhInput | DiemThiUpdateManyWithWhereWithoutThiSinhInput[]
    deleteMany?: DiemThiScalarWhereInput | DiemThiScalarWhereInput[]
  }

  export type DiemThiCreateNestedManyWithoutMonThiInput = {
    create?: XOR<DiemThiCreateWithoutMonThiInput, DiemThiUncheckedCreateWithoutMonThiInput> | DiemThiCreateWithoutMonThiInput[] | DiemThiUncheckedCreateWithoutMonThiInput[]
    connectOrCreate?: DiemThiCreateOrConnectWithoutMonThiInput | DiemThiCreateOrConnectWithoutMonThiInput[]
    createMany?: DiemThiCreateManyMonThiInputEnvelope
    connect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
  }

  export type DiemThiUncheckedCreateNestedManyWithoutMonThiInput = {
    create?: XOR<DiemThiCreateWithoutMonThiInput, DiemThiUncheckedCreateWithoutMonThiInput> | DiemThiCreateWithoutMonThiInput[] | DiemThiUncheckedCreateWithoutMonThiInput[]
    connectOrCreate?: DiemThiCreateOrConnectWithoutMonThiInput | DiemThiCreateOrConnectWithoutMonThiInput[]
    createMany?: DiemThiCreateManyMonThiInputEnvelope
    connect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
  }

  export type DiemThiUpdateManyWithoutMonThiNestedInput = {
    create?: XOR<DiemThiCreateWithoutMonThiInput, DiemThiUncheckedCreateWithoutMonThiInput> | DiemThiCreateWithoutMonThiInput[] | DiemThiUncheckedCreateWithoutMonThiInput[]
    connectOrCreate?: DiemThiCreateOrConnectWithoutMonThiInput | DiemThiCreateOrConnectWithoutMonThiInput[]
    upsert?: DiemThiUpsertWithWhereUniqueWithoutMonThiInput | DiemThiUpsertWithWhereUniqueWithoutMonThiInput[]
    createMany?: DiemThiCreateManyMonThiInputEnvelope
    set?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    disconnect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    delete?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    connect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    update?: DiemThiUpdateWithWhereUniqueWithoutMonThiInput | DiemThiUpdateWithWhereUniqueWithoutMonThiInput[]
    updateMany?: DiemThiUpdateManyWithWhereWithoutMonThiInput | DiemThiUpdateManyWithWhereWithoutMonThiInput[]
    deleteMany?: DiemThiScalarWhereInput | DiemThiScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiemThiUncheckedUpdateManyWithoutMonThiNestedInput = {
    create?: XOR<DiemThiCreateWithoutMonThiInput, DiemThiUncheckedCreateWithoutMonThiInput> | DiemThiCreateWithoutMonThiInput[] | DiemThiUncheckedCreateWithoutMonThiInput[]
    connectOrCreate?: DiemThiCreateOrConnectWithoutMonThiInput | DiemThiCreateOrConnectWithoutMonThiInput[]
    upsert?: DiemThiUpsertWithWhereUniqueWithoutMonThiInput | DiemThiUpsertWithWhereUniqueWithoutMonThiInput[]
    createMany?: DiemThiCreateManyMonThiInputEnvelope
    set?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    disconnect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    delete?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    connect?: DiemThiWhereUniqueInput | DiemThiWhereUniqueInput[]
    update?: DiemThiUpdateWithWhereUniqueWithoutMonThiInput | DiemThiUpdateWithWhereUniqueWithoutMonThiInput[]
    updateMany?: DiemThiUpdateManyWithWhereWithoutMonThiInput | DiemThiUpdateManyWithWhereWithoutMonThiInput[]
    deleteMany?: DiemThiScalarWhereInput | DiemThiScalarWhereInput[]
  }

  export type ThiSinhCreateNestedOneWithoutDiemThisInput = {
    create?: XOR<ThiSinhCreateWithoutDiemThisInput, ThiSinhUncheckedCreateWithoutDiemThisInput>
    connectOrCreate?: ThiSinhCreateOrConnectWithoutDiemThisInput
    connect?: ThiSinhWhereUniqueInput
  }

  export type MonThiCreateNestedOneWithoutDiemThisInput = {
    create?: XOR<MonThiCreateWithoutDiemThisInput, MonThiUncheckedCreateWithoutDiemThisInput>
    connectOrCreate?: MonThiCreateOrConnectWithoutDiemThisInput
    connect?: MonThiWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ThiSinhUpdateOneRequiredWithoutDiemThisNestedInput = {
    create?: XOR<ThiSinhCreateWithoutDiemThisInput, ThiSinhUncheckedCreateWithoutDiemThisInput>
    connectOrCreate?: ThiSinhCreateOrConnectWithoutDiemThisInput
    upsert?: ThiSinhUpsertWithoutDiemThisInput
    connect?: ThiSinhWhereUniqueInput
    update?: XOR<XOR<ThiSinhUpdateToOneWithWhereWithoutDiemThisInput, ThiSinhUpdateWithoutDiemThisInput>, ThiSinhUncheckedUpdateWithoutDiemThisInput>
  }

  export type MonThiUpdateOneRequiredWithoutDiemThisNestedInput = {
    create?: XOR<MonThiCreateWithoutDiemThisInput, MonThiUncheckedCreateWithoutDiemThisInput>
    connectOrCreate?: MonThiCreateOrConnectWithoutDiemThisInput
    upsert?: MonThiUpsertWithoutDiemThisInput
    connect?: MonThiWhereUniqueInput
    update?: XOR<XOR<MonThiUpdateToOneWithWhereWithoutDiemThisInput, MonThiUpdateWithoutDiemThisInput>, MonThiUncheckedUpdateWithoutDiemThisInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DiemThiCreateWithoutThiSinhInput = {
    diem: number
    maNgoaiNgu?: string | null
    monThi: MonThiCreateNestedOneWithoutDiemThisInput
  }

  export type DiemThiUncheckedCreateWithoutThiSinhInput = {
    id?: number
    maMon: string
    diem: number
    maNgoaiNgu?: string | null
  }

  export type DiemThiCreateOrConnectWithoutThiSinhInput = {
    where: DiemThiWhereUniqueInput
    create: XOR<DiemThiCreateWithoutThiSinhInput, DiemThiUncheckedCreateWithoutThiSinhInput>
  }

  export type DiemThiCreateManyThiSinhInputEnvelope = {
    data: DiemThiCreateManyThiSinhInput | DiemThiCreateManyThiSinhInput[]
    skipDuplicates?: boolean
  }

  export type DiemThiUpsertWithWhereUniqueWithoutThiSinhInput = {
    where: DiemThiWhereUniqueInput
    update: XOR<DiemThiUpdateWithoutThiSinhInput, DiemThiUncheckedUpdateWithoutThiSinhInput>
    create: XOR<DiemThiCreateWithoutThiSinhInput, DiemThiUncheckedCreateWithoutThiSinhInput>
  }

  export type DiemThiUpdateWithWhereUniqueWithoutThiSinhInput = {
    where: DiemThiWhereUniqueInput
    data: XOR<DiemThiUpdateWithoutThiSinhInput, DiemThiUncheckedUpdateWithoutThiSinhInput>
  }

  export type DiemThiUpdateManyWithWhereWithoutThiSinhInput = {
    where: DiemThiScalarWhereInput
    data: XOR<DiemThiUpdateManyMutationInput, DiemThiUncheckedUpdateManyWithoutThiSinhInput>
  }

  export type DiemThiScalarWhereInput = {
    AND?: DiemThiScalarWhereInput | DiemThiScalarWhereInput[]
    OR?: DiemThiScalarWhereInput[]
    NOT?: DiemThiScalarWhereInput | DiemThiScalarWhereInput[]
    id?: IntFilter<"DiemThi"> | number
    sbd?: StringFilter<"DiemThi"> | string
    maMon?: StringFilter<"DiemThi"> | string
    diem?: FloatFilter<"DiemThi"> | number
    maNgoaiNgu?: StringNullableFilter<"DiemThi"> | string | null
  }

  export type DiemThiCreateWithoutMonThiInput = {
    diem: number
    maNgoaiNgu?: string | null
    thiSinh: ThiSinhCreateNestedOneWithoutDiemThisInput
  }

  export type DiemThiUncheckedCreateWithoutMonThiInput = {
    id?: number
    sbd: string
    diem: number
    maNgoaiNgu?: string | null
  }

  export type DiemThiCreateOrConnectWithoutMonThiInput = {
    where: DiemThiWhereUniqueInput
    create: XOR<DiemThiCreateWithoutMonThiInput, DiemThiUncheckedCreateWithoutMonThiInput>
  }

  export type DiemThiCreateManyMonThiInputEnvelope = {
    data: DiemThiCreateManyMonThiInput | DiemThiCreateManyMonThiInput[]
    skipDuplicates?: boolean
  }

  export type DiemThiUpsertWithWhereUniqueWithoutMonThiInput = {
    where: DiemThiWhereUniqueInput
    update: XOR<DiemThiUpdateWithoutMonThiInput, DiemThiUncheckedUpdateWithoutMonThiInput>
    create: XOR<DiemThiCreateWithoutMonThiInput, DiemThiUncheckedCreateWithoutMonThiInput>
  }

  export type DiemThiUpdateWithWhereUniqueWithoutMonThiInput = {
    where: DiemThiWhereUniqueInput
    data: XOR<DiemThiUpdateWithoutMonThiInput, DiemThiUncheckedUpdateWithoutMonThiInput>
  }

  export type DiemThiUpdateManyWithWhereWithoutMonThiInput = {
    where: DiemThiScalarWhereInput
    data: XOR<DiemThiUpdateManyMutationInput, DiemThiUncheckedUpdateManyWithoutMonThiInput>
  }

  export type ThiSinhCreateWithoutDiemThisInput = {
    sbd: string
  }

  export type ThiSinhUncheckedCreateWithoutDiemThisInput = {
    sbd: string
  }

  export type ThiSinhCreateOrConnectWithoutDiemThisInput = {
    where: ThiSinhWhereUniqueInput
    create: XOR<ThiSinhCreateWithoutDiemThisInput, ThiSinhUncheckedCreateWithoutDiemThisInput>
  }

  export type MonThiCreateWithoutDiemThisInput = {
    maMon: string
    tenMon: string
  }

  export type MonThiUncheckedCreateWithoutDiemThisInput = {
    id?: number
    maMon: string
    tenMon: string
  }

  export type MonThiCreateOrConnectWithoutDiemThisInput = {
    where: MonThiWhereUniqueInput
    create: XOR<MonThiCreateWithoutDiemThisInput, MonThiUncheckedCreateWithoutDiemThisInput>
  }

  export type ThiSinhUpsertWithoutDiemThisInput = {
    update: XOR<ThiSinhUpdateWithoutDiemThisInput, ThiSinhUncheckedUpdateWithoutDiemThisInput>
    create: XOR<ThiSinhCreateWithoutDiemThisInput, ThiSinhUncheckedCreateWithoutDiemThisInput>
    where?: ThiSinhWhereInput
  }

  export type ThiSinhUpdateToOneWithWhereWithoutDiemThisInput = {
    where?: ThiSinhWhereInput
    data: XOR<ThiSinhUpdateWithoutDiemThisInput, ThiSinhUncheckedUpdateWithoutDiemThisInput>
  }

  export type ThiSinhUpdateWithoutDiemThisInput = {
    sbd?: StringFieldUpdateOperationsInput | string
  }

  export type ThiSinhUncheckedUpdateWithoutDiemThisInput = {
    sbd?: StringFieldUpdateOperationsInput | string
  }

  export type MonThiUpsertWithoutDiemThisInput = {
    update: XOR<MonThiUpdateWithoutDiemThisInput, MonThiUncheckedUpdateWithoutDiemThisInput>
    create: XOR<MonThiCreateWithoutDiemThisInput, MonThiUncheckedCreateWithoutDiemThisInput>
    where?: MonThiWhereInput
  }

  export type MonThiUpdateToOneWithWhereWithoutDiemThisInput = {
    where?: MonThiWhereInput
    data: XOR<MonThiUpdateWithoutDiemThisInput, MonThiUncheckedUpdateWithoutDiemThisInput>
  }

  export type MonThiUpdateWithoutDiemThisInput = {
    maMon?: StringFieldUpdateOperationsInput | string
    tenMon?: StringFieldUpdateOperationsInput | string
  }

  export type MonThiUncheckedUpdateWithoutDiemThisInput = {
    id?: IntFieldUpdateOperationsInput | number
    maMon?: StringFieldUpdateOperationsInput | string
    tenMon?: StringFieldUpdateOperationsInput | string
  }

  export type DiemThiCreateManyThiSinhInput = {
    id?: number
    maMon: string
    diem: number
    maNgoaiNgu?: string | null
  }

  export type DiemThiUpdateWithoutThiSinhInput = {
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
    monThi?: MonThiUpdateOneRequiredWithoutDiemThisNestedInput
  }

  export type DiemThiUncheckedUpdateWithoutThiSinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    maMon?: StringFieldUpdateOperationsInput | string
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiemThiUncheckedUpdateManyWithoutThiSinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    maMon?: StringFieldUpdateOperationsInput | string
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiemThiCreateManyMonThiInput = {
    id?: number
    sbd: string
    diem: number
    maNgoaiNgu?: string | null
  }

  export type DiemThiUpdateWithoutMonThiInput = {
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
    thiSinh?: ThiSinhUpdateOneRequiredWithoutDiemThisNestedInput
  }

  export type DiemThiUncheckedUpdateWithoutMonThiInput = {
    id?: IntFieldUpdateOperationsInput | number
    sbd?: StringFieldUpdateOperationsInput | string
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiemThiUncheckedUpdateManyWithoutMonThiInput = {
    id?: IntFieldUpdateOperationsInput | number
    sbd?: StringFieldUpdateOperationsInput | string
    diem?: FloatFieldUpdateOperationsInput | number
    maNgoaiNgu?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}